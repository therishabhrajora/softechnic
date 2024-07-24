import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import Profile from "./routes/navElements/Profile";
import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";

const Nav = () => {
  const navElement = [
    "Softechnic235",
    "teams",
    "copilateAi",
    "windows",
    "surface",
    "xbox",
    "products",
  ];

  const sidebarref = useRef();
  const profileref = useRef();

  const auth = localStorage.getItem("user");

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signUp");
  };

  const [showProfile, setShowProfile] = useState(false);
  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };
  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleOutsideClickref = async (e) => {
    if (sidebarref.current && !sidebarref.current.contains(e.target)) {
      setShowSidebar(false);
    }
    if (profileref.current && !profileref.current.contains(e.target)) {
      setShowProfile(false);
    }
  };




  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClickref);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClickref);
    };
  }, []);

  return (
    <>
      <div className="bg-green-800 h-14 w-[100vw] capitalize px-10 py-6 flex justify-start items-center gap-4 fixed top-0 z-30">
        <ul className="md:flex lg:flex w-[40%] text-blue-300 h-14 items-center content-center">
          <li>
            <Link to="/" className="flex items-center gap-2">
              <img
                className="w-8 h-full"
                src="../images/icon_development.png"
                alt="logo"
              />
              <span className="text-lg font-bold hidden sm:block">
                SOFTECHNIC
              </span>
            </Link>
          </li>
        </ul>
        <div className="w-[60%] flex item-center justify-start flex-wrap text-sm font-md  text-gray-500 lg:border-b md:border-none border-gray-200  dark:text-gray-400 mr-4">
          <ul className="menuLinks lg:flex  hidden md:hidden text-gray-400 ">
            {navElement.map((el, index) => (
              <>
                <li
                  key={index}
                 
                  className="hover:text-white"
                >
                  <Link
                    to={`/${el}`}
                    aria-current=""
                    className="inline-block text-md py-4 px-2 text-blue-600"
                  >
                    {el}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>

        <div className="w-1/4  md:text-xl">
          <div className="flex  gap-5 items-center float-right">
            <div className="search flex item-center text-white p-2">
              <input
                className="searchbox w-[10vw] mr-2 h-6 p-3 text-sm focus:outline-none text-black"
                type="text"
                placeholder="Search softechnic"
              />
              <IoIosSearch className=" hover:cursor-pointer mt-0.5" />
            </div>

            <div className="cart text-white hover:text-slate-400">
              <Link to="/cart">
                <abbr title="cart">
                  <FaShoppingCart />
                </abbr>
              </Link>
            </div>
            <div className="login text-white ">
              {auth ? (
                <div className="flex gap-5">
                  <Link
                    className="hover:text-slate-400"
                    onClick={logout}
                    to="/login"
                  >
                    <abbr title={`LogOut ${name}`}>
                      <IoMdLogOut />
                    </abbr>
                  </Link>
                  <span ref={profileref} onClick={handleShowProfile}>
                    <abbr title="Profile">
                      <ImProfile className="hover:text-slate-400 cursor-pointer" />
                    </abbr>
                  </span>
                  {showProfile && <Profile />}
                </div>
              ) : (
                <Link className="hover:text-slate-400" to="/login">
                  <abbr title="Login">
                    <FaUser />
                  </abbr>
                </Link>
              )}
            </div>
            <div
              ref={sidebarref}
              onClick={handleShowSidebar}
              className="menu-button text-white lg:hidden hover:cursor-pointer"
            >
              <abbr title="menu">
                <FaBars />
              </abbr>
              {showSidebar && <Sidebar navElement={navElement} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
