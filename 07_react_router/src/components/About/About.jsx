import React from "react";

export default function About() {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-12">
          About Me 👩‍💻
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src="/Tripti.jpg"
              alt="Tripti"
              className="w-80 mx-auto rounded-3xl border-4 border-purple-500"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              Hi, I'm Tripti Jha
            </h2>

            <p className="text-gray-300 leading-8">
              I am an MCA graduate from Banaras Hindu University
              passionate about Full Stack Development, Software
              Engineering, AI-powered applications and solving
              real-world problems through technology.
            </p>

            <p className="text-gray-300 leading-8 mt-4">
              I completed my internship as a Full Stack Developer
              at DotCreative where I worked on modern web
              applications using React.js, APIs, SQL and
              industry-standard development practices.
            </p>

            <p className="text-gray-300 leading-8 mt-4">
              I enjoy learning new technologies, participating
              in coding challenges and building projects that
              create real impact.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold text-purple-400">
              🎓 Education
            </h3>

            <p className="mt-3 text-gray-300">
              B.Sc. Mathematics (Hons.)
            </p>

            <p className="text-gray-400">
              West Bengal State University
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold text-purple-400">
              🎓 Education
            </h3>

            <p className="mt-3 text-gray-300">
              MCA
            </p>

            <p className="text-gray-400">
              Banaras Hindu University
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold text-purple-400">
              💼 Internship
            </h3>

            <p className="mt-3 text-gray-300">
              Full Stack Developer Intern
            </p>

            <p className="text-gray-400">
              DotCreative
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold text-purple-400">
              🏅 Certification
            </h3>

            <p className="mt-3 text-gray-300">
              NPTEL Cloud Computing
            </p>

            <p className="text-gray-400">
              Silver Medal
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold text-purple-400">
              🏅 Certification
            </h3>

            <p className="mt-3 text-gray-300">
              NPTEL Distributed Systems
            </p>

            <p className="text-gray-400">
              71% Score
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold text-purple-400">
              🏅 Certification
            </h3>

            <p className="mt-3 text-gray-300">
              NPTEL Introduction to LLMs
            </p>

            <p className="text-gray-400">
              72% Score
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}