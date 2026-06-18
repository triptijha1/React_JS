import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="w-full h-screen duration-500 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      {/* Center Content */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">
          🎨 Background Changer
        </h1>

        <p className="text-xl text-white/90">
          Current Color:
          <span className="font-semibold capitalize ml-2">
            {color}
          </span>
        </p>
      </div>

      {/* Bottom Color Palette */}
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-4">
        <div
          className="flex flex-wrap justify-center gap-4
          backdrop-blur-md bg-white/20
          border border-white/30
          shadow-2xl
          px-5 py-4
          rounded-3xl"
        >

          <button
            onClick={() => setColor("red")}
            className="outline-none px-5 py-2 rounded-full text-white shadow-lg hover:scale-110 transition duration-300"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-5 py-2 rounded-full text-white shadow-lg hover:scale-110 transition duration-300"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-5 py-2 rounded-full text-white shadow-lg hover:scale-110 transition duration-300"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-5 py-2 rounded-full text-black shadow-lg hover:scale-110 transition duration-300"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-5 py-2 rounded-full text-white shadow-lg hover:scale-110 transition duration-300"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none px-5 py-2 rounded-full text-white shadow-lg hover:scale-110 transition duration-300"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("black")}
            className="outline-none px-5 py-2 rounded-full text-white shadow-lg hover:scale-110 transition duration-300"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

        </div>
      </div>
    </div>
  )
}

export default App