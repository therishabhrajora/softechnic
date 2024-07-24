import React from "react";

function Profile() {
  const auth = localStorage.getItem("user");
  return (
    <div className="absolute w-[20%] min-w-[30vh] z-40 bg-green-300 top-11 right-10 rounded-xl animate-scaleUpVerTop ">
      <div className=" relative w-full  h-[14vh] bg-black rounded-tl-xl rounded-tr-xl mb-8 animate-open">
        <center>
        <div className="absolute w-14 h-14 content-center top-12 left-[34%] sm:left-[38%] md:left-[38%] lg:left-[42%] rounded-full text-center text-sm border-2 border-white bg-blue-500 animate-open">
        {JSON.parse(auth).username}
        </div>
        </center>
      </div>
      <div className="w-full bg-green-300 text-black text-base p-2  rounded-bl-xl rounded-br-xl animate-open">
        <p>Username: {JSON.parse(auth).username}</p>
        <p>Email: {JSON.parse(auth).email}</p>
      </div>
    </div>
  );
}

export default Profile;
