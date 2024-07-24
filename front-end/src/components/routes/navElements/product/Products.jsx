import React, { useContext, useEffect } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineLocationSearching } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";

import { ProductsItemsContext } from "../../../../store/Products-Store";

function Products() {
  const {
    displayData,
    deleteSingleData,
    deleteAll,
    searchData,
    products,
    checkedselectedItems,
    deletecheckedItems,
    checkedIds,
    searchKeyref,
  } = useContext(ProductsItemsContext);

  const handleClickOutside = (event) => {
    if (searchKeyref.current && !searchKeyref.current.contains(event.target)) {
      searchKeyref.current.value = "";
    }
  };

  useEffect(() => {
    displayData();
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-[100vw] mt-11 fixed content-center flex pr-7 pt-2  bg-green-500 items-center pb-2 z-20">
        <div className="w-[50vw] flex  items-center justify-start gap-3 ml-3">
          <>
            <div className="">
              <input
                ref={searchKeyref}
                className="border border-slate-400 rounded py-1 px-3 w-full focus:outline-none  "
                type="text"
                placeholder="search"
              />
            </div>

            <Link to="/products">
              <div onClick={searchData} className="btn-search">
                Search
                <MdOutlineLocationSearching className="text-lg" />
              </div>
            </Link>
          </>
        </div>
        <div className="w-[50vw] flex justify-end items-center gap-3 ml-3">
          {checkedIds.length > 0 ? (
            <Link to="/products">
              <div onClick={deletecheckedItems} className="btn-delete">
                Delete
                <MdOutlineDeleteSweep className="text-xl" />
              </div>
            </Link>
          ) : (
            <Link to="/products">
              <div onClick={deleteAll} className="btn-delete">
                Delete All
                <MdOutlineDeleteSweep className="text-xl" />
              </div>
            </Link>
          )}

          <Link to="/products/add-products">
            <div className="btn-addProduct">
              Add Products
              <IoIosAddCircleOutline />
            </div>
          </Link>
        </div>
      </div>

      {products.length == 0 ? (
        <div className="w-[98.7vw] bg-orange-200 mt-2 h-[75vh]   content-center flex flex-col justify-center p-32  text-3xl">
          <div className="w-[50%] ml-[25%] flex flex-col justify-center items-center gap-5">
            There is no Product!
            <Link to="/products">
              <div onClick={displayData} className="btn-back">
                <FaAngleLeft className="text-xl" />
                back
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full mt-3 p-5 bg-orange-200 min-h-screen">
          <ul className="w-1/3 mt-20 flex flex-col gap-5">
            {products.reverse().map((product) => (
              <li key={product._id} className="product-li">
                <input
                  onClick={checkedselectedItems}
                  className=" text-white border-white-400/20 scale-100 transition-all duration-500 ease-in-out hover:scale-110 checked:scale-100 w-5 h-5"
                  type="checkbox"
                  id={product._id}
                  name={product.productName}
                />

                <label>
                  <li className="relative w-full min-w-52 m-2 p-2 border-gray-100 border shadow-slate-600 shadow-sm rounded-lg capitalize">
                    <p>Name: {product.productName}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: {product.price}</p>
                    <p>Company: {product.company}</p>

                    <div
                      onClick={() => deleteSingleData(product._id)}
                      className="edits absolute top-1 right-1 bg-blue-400 hover:bg-red-400 w-6 h-6   flex justify-center items-center hover:cursor-pointer"
                    >
                      <IoClose className="text-xl" />
                    </div>
                    <Link to={"/products/" + product._id}>
                      <div className="edits absolute top-8 right-1 bg-blue-400 hover:bg-blue-200 w-6 h-6   flex justify-center items-center hover:cursor-pointer">
                        <FiEdit className="text-lg" />
                      </div>
                    </Link>
                  </li>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Products;
