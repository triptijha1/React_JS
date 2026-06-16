import React from "react";
import heroImg from "../assets/hero.png";

const Card = ({ Name, Age }) => {
  return (
    <div className="group relative w-80 overflow-hidden rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/20">

      <div className="relative h-96 overflow-hidden">
        <img
          src={heroImg}
          alt="Profile"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 p-6 text-white">
          <h2 className="text-2xl font-bold">{Name}</h2>

          <p className="mt-2 text-sm text-gray-300">
            Age: {Age}
          </p>

          <button className="mt-4 rounded-xl bg-cyan-500 px-5 py-2 font-medium text-white transition hover:bg-cyan-400">
            View Profile →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;