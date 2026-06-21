import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <img
                src="/cat-logo.jpg"
                alt="Cat Logo"
                className="w-12 h-12 rounded-full border-2 border-purple-500"
              />

              <div>
                <h2 className="text-2xl font-bold text-purple-400">
                  Tripti Jha
                </h2>

                <p className="text-gray-400 text-sm">
                  Full Stack Developer
                </p>
              </div>

            </div>

            <p className="text-gray-400 mt-4 leading-7">
              Passionate about building modern web applications,
              AI-powered solutions and solving real-world problems
              through software development.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold text-purple-400 mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                About
              </Link>

              <Link
                to="/github"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                GitHub
              </Link>

              <Link
                to="/contact"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Connect */}
          <div>

            <h3 className="text-xl font-semibold text-purple-400 mb-4">
              Connect
            </h3>

            <div className="space-y-3">

              <a
                href="mailto:triptijha2711@gmail.com"
                className="block text-gray-400 hover:text-purple-400"
              >
                📧 Email
              </a>

              <a
                href="https://github.com/triptijha1"
                target="_blank"
                rel="noreferrer"
                className="block text-gray-400 hover:text-purple-400"
              >
                💻 GitHub
              </a>

              <a
                href="https://linkedin.com/in/tripti27/"
                target="_blank"
                rel="noreferrer"
                className="block text-gray-400 hover:text-purple-400"
              >
                🔗 LinkedIn
              </a>

              <p className="text-gray-400">
                📍 Kolkata, India
              </p>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Tripti Jha • Built with React &
            Tailwind CSS ❤️
          </p>

        </div>

      </div>

    </footer>
  );
}