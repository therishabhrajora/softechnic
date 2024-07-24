import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  let productNameref = useRef();
  let categoryref = useRef();
  let priceref = useRef();
  let companyref = useRef();
  let navigate = useNavigate();

  const addProduct = async () => {
    try {
      let productName = productNameref.current.value;
      let category = categoryref.current.value;
      let price = priceref.current.value;
      let company = companyref.current.value;

      const auth = localStorage.getItem("user");

      const userID = JSON.parse(auth)._id;

      const response = await fetch("http://localhost:5000/products/add-products", {
        method: 'POST',
        body: JSON.stringify({
          productName,
          category,
          price,
          company,
          userID,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });

      const parseResponse = await response.json();

      if (parseResponse) {
        localStorage.setItem("products", JSON.stringify(parseResponse));
        navigate("/products");
      } else {
        alert("Some technical issue occurred.");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="w-[100vw] min-w-72 bg-blue-200 rounded-lg mt-12">
      <center>
        <div className="flex flex-col w-full min-w-48 border border-slate-400 shadow-lg justify-center bg-slate-200 rounded-lg whitespace-pre-wrap p-5">
          <h2 className="text-2xl font-bold h1">Add Products</h2>
          <div className="rounded w-[50%] mt-8 ml-[25%]">
            <input
              ref={productNameref}
              className="border border-slate-400 rounded p-2 w-full focus:outline-none"
              type="text"
              placeholder="Enter Product name"
            />
          </div>
          <div className="bg-red-400 rounded w-[50%] mt-8 ml-[25%]">
            <input
              ref={categoryref}
              className="border border-slate-400 rounded p-2 w-full focus:outline-none"
              type="text"
              placeholder="Enter category"
            />
          </div>
          <div className="bg-red-400 rounded w-[50%] mt-8 ml-[25%]">
            <input
              ref={priceref}
              className="border border-slate-400 rounded p-2 w-full focus:outline-none"
              type="text"
              placeholder="Enter price"
            />
          </div>
          <div className="bg-red-400 rounded w-[50%] mt-8 ml-[25%]">
            <input
              ref={companyref}
              className="border border-slate-400 rounded p-2 w-full focus:outline-none"
              type="text"
              placeholder="Enter company"
            />
          </div>
          <center>
            <div
              onClick={addProduct}
              className="mt-8 hover:cursor-pointer rounded-md border border-slate-300 bg-blue-200 px-4 py-1 w-fit"
            >
              Add Product
            </div>
          </center>
        </div>
      </center>
    </div>
  );
}

export default AddProducts;
