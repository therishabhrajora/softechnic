import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateComponent";
import Home from "./components/home/Home";
import Softechnic235 from "./components/routes/navElements/Softechnic235";
import Teams from "./components/routes/navElements/Teams";
import CopilotAi from "./components/routes/navElements/CopilotAi";
import Windows from "./components/routes/navElements/Windows";
import Surface from "./components/routes/navElements/Surface";
import Xbox from "./components/routes/navElements/Xbox";
import Products from "./components/routes/navElements/product/Products";
import Cart from "./components/routes/navElements/Cart";
import Login from "./components/routes/navElements/Login";
import SignUp from "./components/routes/navElements/SignUp";
import Logout from "./components/routes/navElements/Logout";
import AddProducts from "./components/routes/navElements/product/AddProducts";
import UpdateProducts from "./components/routes/navElements/product/UpdateProducts";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/products/add-products" element={<AddProducts />} />
        <Route path="/products/:id" element={<UpdateProducts />} />

        <Route element={<PrivateRoute />}>
          <Route path="/softechnic235" element={<Softechnic235 />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/copilateAi" element={<CopilotAi />} />
          <Route path="/windows" element={<Windows />} />
          <Route path="/surface" element={<Surface />} />
          <Route path="/xbox" element={<Xbox />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
