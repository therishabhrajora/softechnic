import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const usernameref = useRef();
  const passwordref = useRef();


  const handleSignIn = async (req, res) => {
    try {
      let username = usernameref.current.value;
      let password = passwordref.current.value;

      let res = await fetch("http://localhost:5000/login", {
        method: "post",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      res = await res.json();
      console.log("login response",res)
      if (res.auth) {
        localStorage.setItem("user", JSON.stringify(res.userResponse));
        localStorage.setItem("token", JSON.stringify(res.auth));
        navigate("/");
      } else {
        alert("Error: Please enter correct details");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("enter the correct values");
      // usernameref.current.value = "";
      //passwordref.current.value = "";
      // Handle other error scenarios (e.g., network issues)
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="w-full h-[100vh] bg-blue-200 mt-11 py-20">
      <center>
        <div className=" flex flex-col h-[350px] w-1/4 min-w-48 border border-slate-400 shadow-lg justify-center bg-slate-200 rounded-lg whitespace-pre-wrap ">
          <h2 className="text-2xl font-bold ">Login</h2>
          <div className=" rounded w-[70%] mt-10 ml-[15%] ">
            <input
              ref={usernameref}
              className="border border-slate-400 rounded p-2 w-full focus:outline-none"
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div className="bg-red-400 rounded w-[70%] mt-8 ml-[15%] ">
            <input
              ref={passwordref}
              className="border border-slate-400 rounded p-2 w-full focus:outline-none"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <center>
            <div
              onClick={handleSignIn}
              className="mt-8 hover:cursor-pointer rounded-md border border-slate-300 bg-blue-200 px-4 py-1 w-fit "
            >
              Sign in
            </div>
            <div className="mt-4 text-sm ">
              Don't have an account?
              <Link to="/signUp">
                <span className="text-blue-500"> SignUp</span>
              </Link>
            </div>
          </center>
        </div>
      </center>
    </div>
  );
}

export default Login;
