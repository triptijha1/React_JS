import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">

      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-12">
          GitHub Profile 🚀
        </h1>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-10">

          <div className="flex flex-col items-center">

            <img
              src={data.avatar_url}
              alt="Github Avatar"
              className="w-40 h-40 rounded-full border-4 border-purple-500"
            />

            <h2 className="text-3xl font-bold mt-4">
              {data.name}
            </h2>

            <p className="text-gray-400 mt-2">
              {data.bio}
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-purple-400 text-lg">
                Followers
              </h3>

              <p className="text-3xl font-bold mt-2">
                {data.followers}
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-purple-400 text-lg">
                Following
              </h3>

              <p className="text-3xl font-bold mt-2">
                {data.following}
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-purple-400 text-lg">
                Repositories
              </h3>

              <p className="text-3xl font-bold mt-2">
                {data.public_repos}
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-purple-400 text-lg">
                Location
              </h3>

              <p className="text-xl font-bold mt-2">
                {data.location || "India"}
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-purple-400 font-bold mb-2">
                Username
              </h3>

              <p>{data.login}</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-purple-400 font-bold mb-2">
                Account Created
              </h3>

              <p>
                {new Date(data.created_at).toLocaleDateString()}
              </p>
            </div>

          </div>

          <div className="text-center mt-10">

            <a
              href={data.html_url}
              target="_blank"
              rel="noreferrer"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg"
            >
              Visit GitHub Profile
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/triptijha1"
  );

  return response.json();
};