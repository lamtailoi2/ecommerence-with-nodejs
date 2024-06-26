import React from "react";
import "./home.css";
import { useState, useEffect, useRef } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import featureImg1 from "../../assets/imgs/pngegg.png";
import Login from "../Login/Login";

function Home() {
  //Updated

  return (
    <>
      <div className="bg-gradient-to-r  from-pink-300 h-full">
        <div className="header container-xl bg-dracula-yellow flex justify-around p-4">
          <span className="flex space-x-1">
              <img
                src="https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo"
                className="w-12"
                alt=""
              />
              <h1 className="text-slate-950 p-3 text-xl">Snooker</h1>
          </span>
          <div className="search_bar p-3">
            <input
              type="text"
              placeholder=" Search..."
              className="border-2 border-gray-600 bg-dracula-yellow rounded"
            />
            <button className="border-gray-600 rounded-3xl px-1">
              <i class="fa-solid fa-magnifying-glass text-xl"></i>
            </button>
          </div>
          <ul class="flex space-x-4">
          <li class="inline-block text-slate-950 p-3">
              <Link to="/">Home</Link>
            </li>
            <li class="inline-block text-slate-950 p-3">
              <a href="">Shop</a>
            </li>

            <li class="inline-block text-slate-950 p-3">
              <Link to="/login">Login</Link>
              {/* <a href="">Login</a> */}
            </li>
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
            <h1 className="text-6xl hover:animate-bounce">
              <strong className="text-red-400">Snooker </strong> Store
            </h1>
          </div>
          <img
            className="inline-block h-full"
            src="https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MjA0ODEyMDk5OTYzMDcwMDQ2/lululemon-mens-city-verse-sneaker-hero.webp"
            alt="model1"
          />
        </div>
        <div className="text-center py-10">
          <h1 className="text-6xl">Features</h1>
          <div className="features pt-10 pb-20 flex space-x-5 justify-around">
            <div className="card w-[320px] h-[480px]  hover:border-2 hover:rounded-md">
              <img src={featureImg1} alt="" className="card_img" />
              <span className="card_name text-xl font-mono">Air Force 1</span>
              <br />
              <span className="card_name text-xl font-mono">Price: 1000$</span>
              <div className="card_color space-x-2">
                <span className="text-xl">Colors:</span>
                <ul className="space-x-4 inline-block">
                  <li className="inline-block border-2 rounded-full border-white w-5 h-5 bg-white"></li>
                  <li className="inline-block border-2 rounded-full border-black w-5 h-5 bg-black"></li>
                </ul>
              </div>
            </div>

            <div className="card w-[320px] h-[480px]  hover:border-2 hover:rounded-md">
              <img src={featureImg1} alt="" className="card_img" />
              <span className="card_name text-xl font-mono">Air Force 1</span>
              <br />
              <span className="card_name text-xl font-mono">Price: 1000$</span>
              <div className="card_color space-x-2">
                <span className="text-xl">Colors:</span>
                <ul className="space-x-4 inline-block">
                  <li className="inline-block border-2 rounded-full border-white w-5 h-5 bg-white"></li>
                  <li className="inline-block border-2 rounded-full border-black w-5 h-5 bg-black"></li>
                </ul>
              </div>
            </div>

            <div className="card w-[320px] h-[480px]  hover:border-2 hover:rounded-md">
              <img src={featureImg1} alt="" className="card_img" />
              <span className="card_name text-xl font-mono">Air Force 1</span>
              <br />
              <span className="card_name text-xl font-mono">Price: 1000$</span>
              <div className="card_color space-x-2">
                <span className="text-xl">Colors:</span>
                <ul className="space-x-4 inline-block">
                  <li className="inline-block border-2 rounded-full border-white w-5 h-5 bg-white"></li>
                  <li className="inline-block border-2 rounded-full border-black w-5 h-5 bg-black"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer  container-xl fixed left-0 bottom-0 w-full space-x-4 bg-dracula_yellow pt-2 text-center">
          <ul className="flex justify-center space-x-5">
            <li className="inline-block">
              <a href="https://www.facebook.com/L14L07I">
                <i class="fa-brands fa-square-facebook px-2"></i>The Snooker
              </a>
            </li>
            <li className="inline-block">
              <i class="fa-solid fa-square-envelope px-2"></i>
              thesnooker@gmail.com{" "}
            </li>
            <li className="inline-block">
              <i class="fa-solid fa-square-phone px-2"></i>+84123456789
            </li>
          </ul>
          <div>
            <span className="text-gray-700 row-span-2 text-sm">
              @ 2024 Snooker, Inc.
            </span>
          </div>
        </div>
      </div>
      <Outlet />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    
    </>
  );
}

export default Home;
