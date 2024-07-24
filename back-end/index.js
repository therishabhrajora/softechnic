const express = require('express');
//const dbConnection = require('./db/mongodb')
const cors = require('cors')
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");

const Jwt = require("jsonwebtoken");
const jwtKey = "softechnic"

const app = express();
app.use(cors());
app.use(express.json());

//------------------------------------------------------------------------------------------------------------------------------------------------------------------Post-signup------------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.post("/signUp",async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email already exists in the database
    const existingUser = await User.findOne({
      email: req.body.email
    });
    if (existingUser) {
      return res.status(400).send({ msg: 'Email already exists' });
    }

    // Create a new user
    const newUser = new User(req.body);
    const savedUser = await newUser.save();

    Jwt.sign({ savedUser }, jwtKey, { expiresIn: "24H" }, (err, token) => {
      if (err) {
        res.send("somthing went wrong,please try after sometime");
      }
      const userResponse = savedUser.toObject();
      delete userResponse.password;
      res.send({ userResponse, auth: token });
    })
  } catch (error) {
    res.status(500).send({ msg: 'Internal server error' });
  }
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------post-login--------------------------------------------------------------------------------------------------------------------------------------------------------------------------


app.post("/login", async (req, res) => {
  try {

    // Check if both username and password are provided
    if (!req.body.username || !req.body.password) {
      return res.status(400).send("Username and password are required.");
    }

    // Find the user based on the provided username and password
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (user) {
      // User found, send user data (excluding password) as response
      Jwt.sign({ user }, jwtKey, { expiresIn: "24h" }, (err, token) => {
        if (err) {
          res.send("somthing went wrong,please try after sometime");
        }
        const userResponse = user.toObject();
        delete userResponse.password;
        res.send({ userResponse, auth: token });
      })
      // const userResponse = user.toObject();
      // delete userResponse.password;
      // res.send(userResponse);
    } else {
      // User not found
      res.status(404).send("User not found.");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal server error.");
  }
});


//------------------------------------------------------------------------------------------------------------------------------------------------------------------post-addproducts---------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.post("/products/add-products",verifyToken, async (req, res) => {
  console.log("Data sending....", req.body);
  try {
    let product = new Product(req.body);
    let savedProduct = await product.save();
    res.send(savedProduct);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------get-products---------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/products", verifyToken, async (req, res) => {
  try {
    const products = await Product.find(); // It's better to use plural for an array of items
    // Removed console.log for security and cleanliness in production code
    res.send(products); // Send the products array as a response
  } catch (error) {
    res.status(500).send(error); // Send error response if something goes wrong
  }
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------delete-id-----------------------------------------------------------------------------------------------------------------------------------------------------------------

app.delete("/products/:id",verifyToken, async (req, res) => {
  const id = req.params.id; // Extract the id from request parameters
  try {

    const deleteProduct = await Product.deleteOne({ _id: id });
    if (deleteProduct.deletedCount === 0) {
      res.status(404).send('Product not found');
    } else {
      res.send(deleteProduct);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------------delete-productsall---------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.delete("/products",verifyToken, async (req, res) => {
  try {
    const deleteAll = await Product.deleteMany({});
    if (deleteAll.deletedCount == 0) {
      res.status(404).send("No record found");
    } else {
      res.send(deleteAll);
    }
  } catch (error) {
    res.send(error);
  }
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------get-findid-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/products/:id", verifyToken,async (req, res) => {
  try {
    const result = await Product.findOne({ _id: req.params.id });
    if (result) {
      res.send(result);
    } else {
      res.send("no record found");
    }
  } catch (error) {
    res.send(error);
  }
})

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------update-id--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.put("/products/:id",verifyToken, async (req, res) => {

  const update = await Product.updateOne(
    { _id: req.params.id }, { $set: req.body })
  res.send(update);
})


//------------------------------------------------------------------------------------------------------------------------------------------------------------------search-key-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/products/search/:key", verifyToken,async (req, res) => {
  const search = await Product.find(
    {
      "$or": [
        { productName: { $regex: req.params.key } },
        { category: { $regex: req.params.key } },
        { price: { $regex: req.params.key } },
        { company: { $regex: req.params.key } },
      ]
    }
  )
  res.send(search)
})


//------------------------------------------------------------------------------------------------------------------------------------------------------------------delete-ids array -------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

app.delete('/product/delete', verifyToken,async (req, res) => {
  console.log("req body", req.body)
  try {
    const { ids } = req.body;
    console.log("ids:", ids)
    if (!ids || !Array.isArray(ids)) {
      return res.status(400).send({ error: "Invalid input" });
    }
    const deleteId = await Product.deleteMany({ _id: { $in: ids } });
    res.send(deleteId);
  } catch (error) {
    console.log("error", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------------search-key-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function verifyToken(req, res, next) {
  let token = req.headers['authorization']
  if (token) {
    token = token.split(" ")[1];
    Jwt.verify(token, jwtKey), (error, valid) => {
      if (error) {
        res.send("please provide token")

      } else {
          next();
      }
    }
  } else {
    res.send("please provide token")
  }
  next();
}



app.listen(5000);
