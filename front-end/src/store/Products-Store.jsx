import { createContext, useReducer, useRef, useState } from "react";

export const ProductsItemsContext = createContext({
  products: [],
  displayData: () => {},
  deleteSingleData: () => {},
  deleteAll: () => {},
  searchData: () => {},
  deletecheckedItems: () => {},
  checkedselectedItems: () => {},
  checkedIds: [],
});

const productsreducer = (currProducts, action) => {
  switch (action.type) {
    case "SHOW_DATA":
      return action.payload.data;
    case "DELETE_All":
      return [];
    case "DELETE_SINGLE":
      return currProducts.filter(
        (product) => product._id !== action.payload.id
      );
    case "DELETE_SELECTED":
      return currProducts.filter(
        (product) => !action.payload.ids.includes(product._id)
      );
    case "SEARCH_DATA":
      return action.payload.search;
    default:
      return currProducts;
  }
};

const ProductsItemsContextProvider = ({ children }) => {
  const searchKeyref = useRef();
  const [products, dispatchProducts] = useReducer(productsreducer, []);
  const [checkedIds, setcheckedIds] = useState([]);

  const displayData = async () => {
    try {
      const response = await fetch("http://localhost:5000/products", {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      let data = await response.json();
      //setProducts(data);
      const productAction = {
        type: "SHOW_DATA",
        payload: {
          data: data,
        },
      };
      dispatchProducts(productAction);
    } catch (error) {
      console.log("display error", error);
    }
  };

  const deleteSingleData = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });

      if (res.status === 200) {
        const DeleteSingleAction = {
          type: "DELETE_SINGLE",
          payload: {
            id: id,
          },
        };
        dispatchProducts(DeleteSingleAction);
        alert("Delete Succesfull");
      } else {
        console.log("Delete failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAll = async () => {
    let deleteConfirm = window.confirm("Do you want Delete all data ?");
    if (deleteConfirm == true) {
      try {
        const res = await fetch(`http://localhost:5000/products`, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        });

        if (res.status === 200) {
          console.log("Delete successful");
          //displayData();
          const DeleteAllAction = {
            type: "DELETE_All",
            payload: {},
          };
          dispatchProducts(DeleteAllAction);
        } else {
          console.log("Delete failed");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const searchData = async (req, res) => {
    const searchkey = searchKeyref.current.value;
    if (searchkey != "") {
      const searchresult = await fetch(
        `http://localhost:5000/products/search/${searchkey}`,
        {
          headers: {
            authorization: `bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      const search = await searchresult.json();
      //setProducts(search);

      const searchDataAction = {
        type: "SEARCH_DATA",
        payload: {
          search,
        },
      };
      dispatchProducts(searchDataAction);
    } else {
      displayData();
    }
  };

  const checkedselectedItems = (e) => {
    if (e.target.checked == true) {
      setcheckedIds([...checkedIds, e.target.id]);
    } else if (e.target.checked == false) {
      setcheckedIds(checkedIds.filter((item) => item !== e.target.id));
    }
  };

  const deletecheckedItems = async (req, res) => {
    try {
      const deleteSelected = await fetch(
        "http://localhost:5000/product/delete",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
          body: JSON.stringify({ ids: checkedIds }),
        }
      );

      if (deleteSelected.status == 200) {
        console.log("delete succesfully");
        //displayData();
        const deleteSelectedAction = {
          type: "DELETE_SELECTED",
          payload: {
            ids: checkedIds,
          },
        };
        dispatchProducts(deleteSelectedAction);
        setcheckedIds([]);
      } else {
        console.log("failed to delete");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <ProductsItemsContext.Provider
      value={{
        products,
        displayData,
        deleteSingleData,
        deleteAll,
        searchData,
        checkedselectedItems,
        deletecheckedItems,
        checkedIds,
        searchKeyref,
      }}
    >
      {children}
    </ProductsItemsContext.Provider>
  );
};

export default ProductsItemsContextProvider;
