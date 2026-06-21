import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-800">

      <nav className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">

            <img
              src="/cat-logo.jpg"
              alt="Cat Logo"
              className="w-12 h-12 rounded-full border-2 border-purple-500"
            />

            <div>
              <h1 className="font-bold text-2xl text-purple-400">
                Tripti Jha
              </h1>

              <p className="text-xs text-gray-400">
                Full Stack Developer
              </p>
            </div>

          </Link>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-8 font-medium">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-purple-400"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-purple-400"
                  }`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-purple-400"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-purple-400"
                  }`
                }
              >
                GitHub
              </NavLink>
            </li>

          </ul>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">

            <a
              href="https://github.com/triptijha1"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              GitHub
            </a>

            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg font-medium transition"
            >
              Contact Me
            </Link>

          </div>

        </div>

      </nav>

    </header>
  );
}