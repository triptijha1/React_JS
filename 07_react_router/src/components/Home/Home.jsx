import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="flex-1">

            <p className="text-purple-400 font-semibold mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Tripti Jha 👋
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Full Stack Developer
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
              MCA student at Banaras Hindu University passionate about
              Full Stack Development, AI-powered applications, and
              building real-world software solutions.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="https://github.com/triptijha1"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
              >
                View GitHub
              </a>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg border border-purple-500 hover:bg-purple-500 transition"
              >
                Contact Me
              </Link>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">

            {/* Cat Image */}
            <img
              src="/Tripti.jpg"
              alt="Tripti Cat Logo"
              className="w-72 h-72 object-cover rounded-full border-4 border-purple-500 shadow-2xl"
            />

          </div>
        </div>
      </section>

      {/* Education & Internship */}
      {/* Education & Internship */}
<section className="max-w-7xl mx-auto px-6 py-10">

  <h2 className="text-4xl font-bold text-center mb-10">
    Journey So Far 🚀
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Education Card */}
    <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">

      <h3 className="text-2xl font-bold text-purple-400 mb-6">
        Education
      </h3>

      {/* MCA */}
      <div>
        <p className="text-xl font-semibold">
          Master of Computer Applications
        </p>

        <p className="text-gray-400 mt-1">
          Banaras Hindu University (BHU)
        </p>

        <p className="text-gray-400">
          CGPA: 7.7
        </p>
      </div>

      <div className="my-6 border-t border-slate-700"></div>

      {/* BSc */}
      <div>
        <p className="text-xl font-semibold">
          B.Sc. Mathematics (Hons.)
        </p>

        <p className="text-gray-400 mt-1">
          West Bengal State University
        </p>

        <p className="text-gray-400">
          CGPA: 9.6
        </p>
      </div>

    </div>

    {/* Internship Card */}
    <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">

      <h3 className="text-2xl font-bold text-purple-400 mb-6">
        Internship
      </h3>

      <p className="text-xl font-semibold">
        Full Stack Developer Intern
      </p>

      <p className="text-gray-400 mt-1">
        DotCreative
      </p>

      <p className="text-gray-400 mt-4 leading-7">
        Worked on responsive web applications,
        REST APIs, React.js, Bootstrap,
        SQL and modern web technologies.
      </p>

      <p className="text-gray-400 mt-3 leading-7">
        Collaborated on real-world client projects,
        implemented new features, fixed bugs and
        improved overall application performance.
      </p>

      

    </div>

  </div>

</section>

      {/* Skills */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-10">
          Technical Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {[
            "Java",
            "JavaScript",
            "React.js",
            "Node.js",
            "Express.js",
            "Next.js",
            "PostgreSQL",
            "Prisma",
            "MongoDB",
            "SQL",
            "Tailwind CSS",
            "Git",
            "GitHub",
            "REST APIs",
            "Docker",
            "AI",
            "Prompt Engineering"
          ].map((skill) => (
            <span
              key={skill}
              className="bg-purple-600/20 border border-purple-500 px-5 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

      </section>

      {/* Featured Project */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Project
        </h2>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">

          <h3 className="text-3xl font-bold text-purple-400 mb-4">
            LearnForge
          </h3>

          <p className="text-gray-300 leading-relaxed">
            LearnForge is an AI-powered learning platform that helps users
            generate structured courses, quizzes, lesson summaries, and
            personalized learning content using the Gemini API. The platform
            supports secure authentication, course management, progress tracking,
            and dynamic content generation, enabling learners to create and follow
            customized learning paths efficiently.
          </p>

          <div className="mt-6">
            <a
              href="https://github.com/triptijha1/learnforge"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              View Project
            </a>
          </div>

        </div>

      </section>

    </div>
  );
}