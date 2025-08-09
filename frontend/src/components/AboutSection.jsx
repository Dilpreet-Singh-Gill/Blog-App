import React from "react";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Card Container */}
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 text-center transition-transform duration-300 hover:scale-[1.02]">
        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          About <span className="text-gray-800">MyBlog</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          🚀 A space where developers and tech enthusiasts share ideas, tutorials, and insights on the latest in web development.
        </p>

        {/* Divider */}
        <div className="border-b border-gray-200 w-20 mx-auto mb-8"></div>

        {/* Content */}
        <div className="space-y-6 text-gray-600 leading-relaxed max-w-3xl mx-auto">
          <p>
            Welcome to <span className="font-semibold text-gray-800">MyBlog</span> — your go-to destination for practical, hands-on learning in the world of web development.
            From beginner-friendly guides to advanced techniques, we bring knowledge closer to you.
          </p>
          <p>
            Our mission is simple: make learning accessible, enjoyable, and impactful. Whether you're taking your first steps in coding or refining your skills, you'll always find something valuable here.
          </p>
          <p className="italic">
            Thank you for being part of our growing community — let’s build, learn, and innovate together! 💡
          </p>
        </div>
      </div>
    </div>
  );
}
