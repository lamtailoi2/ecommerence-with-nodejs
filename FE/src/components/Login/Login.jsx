import React from "react";

function Login() {
  return (
    <>
      <div className="bg-gradient-to-tl from-pink-300 w-full h-screen flex justify-center items-center">
        <div className="loginForm w-3/12 h-2/4 bg-red-300 flex flex-col space-y-3 px-3 items-center pt-3 border-2 border-red-300 rounded-xl">
            <h1 className="text-3xl font-bold block">Login</h1>
            <div className="w-full max-w-sm py-2" id="email">
                <label htmlFor="email" className="text-xl">Email</label>
                <br />
                <input type="text" id="email" className="w-full max-w-sm border-2 rounded-lg"/>
            </div>
            <div className="w-full max-w-sm py-2" id="password">
                <label htmlFor="email" className="text-xl">Password</label>
                <br />
                <input type="password" id="password" className="w-full max-w-sm border-2 rounded-lg"/>
            </div>
            <a href="" className="pl-64 text-gray-600 text-sm">Forget Password?</a>
            <button className="border-2 bg-blue-600 border-blue-600 px-7 py-2 rounded-xl">Submit</button>
            <a href="" className="pt-20 hover:text-blue-700 text-lg clas">---------- Sign Up ----------</a>
            
        </div>
      </div>
    </>
  );
}
export default Login;
