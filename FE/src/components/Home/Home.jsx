import React from "react";
import { useState, useEffect, useRef } from "react";

function Home() {
 

  return (
    <>
      <div className="bg-gradient-to-r  from-pink-300 h-screen">
        <div className="header container-xl bg-dracula-yellow flex justify-around p-4">
          <span className="flex space-x-1">
            <img
              src="https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo"
              className="w-12 p-"
              alt=""
            />
            <h1 className="text-slate-950 p-3 text-xl">Snooker</h1>
          </span>
          <div className="search_bar p-3">
          <input type="text" placeholder=" Search.." className="border-2 border-gray-600 bg-dracula-yellow rounded"  />
              <button className="border-gray-600 rounded-3xl px-1"><i class="fa-solid fa-magnifying-glass text-xl"></i></button>
          </div>
          <ul class="flex space-x-4">
            <li class="inline-block text-slate-950 p-3">
              <a href="">Shop</a>
            </li>
            {/* <li class="inline-block text-slate-950 p-2">
              <input type="text" placeholder=" Search.." className="border-2 border-gray-600 rounded"  />
              <button className="border-gray-600 rounded-3xl px-1"><i class="fa-solid fa-magnifying-glass text-xl"></i></button>
            </li> */}
            <li class="inline-block text-slate-950 p-3">Login</li>
            <li class="inline-block text-slate-950 p-3">
              <a href="">Register</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-around space-x-40 mt-20 ml-20 text-center">
          <div className="space-x-3 space-y-4 pt-20">
            <span className="text-6xl hover:text-dracula-comment">W</span>
            <span className="text-6xl hover:text-dracula-comment">E</span>
            <span className="text-6xl hover:text-dracula-comment">L</span>
            <span className="text-6xl hover:text-dracula-comment">C</span>
            <span className="text-6xl hover:text-dracula-comment">O</span>
            <span className="text-6xl hover:text-dracula-comment">M</span>
            <span className="text-6xl hover:text-dracula-comment">E</span>
            <br />
            <h1 className="text-6xl">to</h1>
            <h1 className="text-6xl animate-bounce">
              <strong className="text-red-400">Snooker </strong> Store
            </h1>
          </div>
          <img
            className="inline-block h-full"
            src="https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MjA0ODEyMDk5OTYzMDcwMDQ2/lululemon-mens-city-verse-sneaker-hero.webp"
            alt="model1"
          />
        </div>
        <div className="footer  container-xl fixed left-0 bottom-0 w-full space-x-4 bg-dracula_yellow pt-2 text-center">
          <ul className="flex justify-center space-x-5">
            <li className="inline-block"><a href="https://www.facebook.com/L14L07I"><i class="fa-brands fa-square-facebook px-2"></i>The Snooker</a></li>
            <li className="inline-block"><i class="fa-solid fa-square-envelope px-2"></i>thesnooker@gmail.com </li>
            <li className="inline-block"><i class="fa-solid fa-square-phone px-2"></i>+84123456789</li>
          </ul>
          <div>
            <span className="text-gray-700 row-span-2 text-sm">@ 2024 Snooker, Inc.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
