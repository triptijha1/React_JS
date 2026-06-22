import React from "react";

export default function Card() {
  return (
    <div className="w-80 rounded-xl shadow-xl p-5 bg-white text-gray-900 dark:bg-slate-800 dark:text-white transition-all duration-300">
      <img
        className="w-full h-56 object-cover rounded"
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
        alt="product"
      />

      <h2 className="text-2xl font-bold mt-5">
        Apple Watch Series 7 GPS,
        Aluminium Case, Starlight Sport
      </h2>

      <div className="flex items-center mt-4 gap-1">
        <span className="text-yellow-400">⭐</span>
        <span className="text-yellow-400">⭐</span>
        <span className="text-yellow-400">⭐</span>
        <span className="text-yellow-400">⭐</span>
        <span className="text-gray-400">⭐</span>

        <span className="ml-2 px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded">
          4.0
        </span>
      </div>

      <div className="flex justify-between items-center mt-6">
        <h3 className="text-4xl font-bold">$599</h3>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
          Add to cart
        </button>
      </div>
    </div>
  );
}