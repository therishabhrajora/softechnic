import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProducts({ id }) {
  const navigate = useNavigate();
  let productNameref = useRef();
  let categoryref = useRef();
  let priceref = useRef();
  let companyref = useRef();
  let params = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async (req, res) => {
    try {
      const result = await fetch(`http://localhost:5000/products/${params.id}`,{
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });

      const preres = await result.json();
      productNameref.current.value = preres.productName;
      categoryref.current.value = preres.category;
      priceref.current.value = preres.price;
      companyref.current.value = preres.company;
    } catch (error) {
      console.log(error);
    }
  };

  const updataData = async () => {
    try {
      let productName = productNameref.current.value;
      let category = categoryref.current.value;
      let price = priceref.current.value;
      let company = companyref.current.value;

      console.log(productName);

      let result = await fetch(`http://localhost:5000/products/${params.id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
            authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: JSON.stringify({
          productName,
          category,
          price,
          company,
        }),
      });
      let update = await result.json();
      navigate("/products")
    } catch (error) {
      console.log("error found before fetch", error);
    }
  };
  return (
    <div className="w-[100vw] min-w-72 bg-blue-200 rounded-lg mt-12">
      <center>
        <div className=" flex flex-col w-full min-w-48 border border-slate-400 shadow-lg justify-center bg-slate-200 rounded-lg whitespace-pre-wrap p-5">
          <h2 className="text-2xl font-bold h1">Update Products</h2>
          <div className=" rounded w-[50%] mt-8 ml-[25%] ">
            <input
              ref={productNameref}
              className="border border-slate-400 rounded p-2 w-full focus:outline-none"
              type="text"
              placeholder="Enter Product name"
            />
          </div>
          <div className="bg-red-400 rounded w-[50%] mt-8 ml-[25%] ">
            <input
              ref={categoryref}
              className="border border-slate-400 rounded p-2 w-full focus:outline-none"
              type="text"
              placeholder="Enter category"
            />
          </div>
          <div className="bg-red-400 rounded w-[50%] mt-8 ml-[25%] ">
            <input
              ref={priceref}
              className="border border-slate-400 rounded p-2 w-full focus:outline-none"
              type="text"
              placeholder="Enter price"
            />
          </div>
          <div className="bg-red-400 rounded w-[50%] mt-8 ml-[25%] ">
            <input
              ref={companyref}
              className="border border-slate-400 rounded p-2 w-full focus:outline-none"
              type="text"
              placeholder="Enter company"
            />
          </div>
          <center>
            <div
              onClick={updataData}
              className="mt-8 hover:cursor-pointer rounded-md border border-slate-300 bg-blue-200 px-4 py-1 w-fit "
            >
              Update Product
            </div>
          </center>
        </div>
      </center>
    </div>
  );
}
export default UpdateProducts;
