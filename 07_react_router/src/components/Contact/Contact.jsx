import React from "react";

export default function Contact() {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-12">
          Contact Me 📬
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">

            <h2 className="text-3xl font-bold text-purple-400 mb-6">
              Let's Connect
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-gray-400">Email</p>
                <p className="text-lg">
                  triptijha2711@gmail.com
                </p>
              </div>

              <div>
                <p className="text-gray-400">Location</p>
                <p className="text-lg">
                  Kolkata, India
                </p>
              </div>

              <div>
                <p className="text-gray-400">GitHub</p>

                <a
                  href="https://github.com/triptijha1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400"
                >
                  github.com/triptijha1
                </a>
              </div>

              <div>
                <p className="text-gray-400">LinkedIn</p>

                <p className="text-purple-400">
                  linkedin.com/in/tripti27/
                </p>
              </div>

            </div>

          </div>

          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700"
              ></textarea>

              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}