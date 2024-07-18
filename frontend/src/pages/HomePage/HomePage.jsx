import React from "react";
import { Link, Navigate } from "react-router-dom";

const HomePage = () => {
  const handleClick = () => {
    Navigate("/api");
  };
  return (
    <>
      <div className="flex justify-center h-screen items-center pb-24">
        <div className="text">
          <h1 className="text-8xl text-center font-bold p-2">apidock.</h1>
          <p className="text-center text-xl">One stop API hub</p>
          <div className="btn text-center text-sm w-fit justify-center mx-auto my-4 py-4 px-10 hover:bg-[#c19ae6] ease-in-out hover:cursor-pointer hover:text-black rounded-full bg-black text-white">
            <Link to="/api">
              <button className="" onClick={handleClick}>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
