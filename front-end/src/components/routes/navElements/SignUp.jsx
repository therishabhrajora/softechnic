import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const usernameref = useRef();
  const emailref = useRef();
  const passwordref = useRef();
 

  useEffect(() => { 
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleSignUp = async () => {
    try {
      const username = usernameref.current.value;
      const email = emailref.current.value;
      const password = passwordref.current.value;
      console.log("Sending signup request...");
      const response = await fetch("http://localhost:5000/signUp", {
        method: "post",
        body: JSON.stringify({ username, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 400) {
        // Handle the case where the email already exists
        alert("Email already exists. Please choose a different email.");
        //setEmail("");
        emailref.current.value = "";
        return; // Exit the function to prevent further execution
      }

      const result = await response.json();
      console.log("Signup response:", result);

      localStorage.setItem("user", JSON.stringify(result.userResponse));
      localStorage.setItem("token", JSON.stringify(result.auth));
      usernameref.current.value = "";
      passwordref.current.value = "";
      navigate("/");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="w-full h-[100vh] bg-blue-200 mt-11 py-16">
      <center>
        <div className=" flex flex-col h-[400px] w-1/4 min-w-48 border border-slate-400 shadow-lg justify-center bg-slate-200 rounded-lg">
          <h2 className="text-2xl font-bold ">Sign Up</h2>
          <div className=" rounded w-[70%] mt-10 ml-[15%] ">
            <input
              ref={usernameref}
              className="border border-slate-400 rounded p-2 w-full focus:outline-none"
              type="text"
              placeholder="Enter Username"
              required
            />
          </div>
          <div className="bg-red-400 rounded w-[70%] mt-8 ml-[15%] ">
            <input
              ref={emailref}
              className="border border-slate-400 rounded p-2 w-full focus:outline-none"
              type="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="bg-red-400 rounded w-[70%] mt-8 ml-[15%] ">
            <input
              ref={passwordref}
              className="border border-slate-400 rounded p-2 w-full focus:outline-none"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
          <center>
            <div
              onClick={handleSignUp}
              className="mt-8 rounded-md border border-slate-300 bg-blue-200 px-4 py-1 w-fit "
            >
              Sign up
            </div>
            <div className="mt-4 text-sm ">
              Already have an account?
              <Link to="/login">
                <span className="text-blue-500"> Login</span>
              </Link>
            </div>
          </center>
        </div>
      </center>
    </div>
  );
}

export default SignUp;
