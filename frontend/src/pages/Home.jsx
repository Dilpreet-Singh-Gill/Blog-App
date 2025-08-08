import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaRocket, FaPaintBrush, FaPuzzlePiece } from "react-icons/fa";
import Lottie from "react-lottie-player";

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="text-emerald-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    <p className="text-slate-600 mt-2">{desc}</p>
  </div>
);

export default function Home() {
  const features = [
    { icon: <FaCode size={40} />, title: "Dev-Centric Content", desc: "Focused on developer needs, from APIs to modern frameworks." },
    { icon: <FaRocket size={40} />, title: "Blazing Fast", desc: "Optimized for performance with a smooth UI experience." },
    { icon: <FaPaintBrush size={40} />, title: "Beautiful UI", desc: "Designed with Tailwind CSS for a clean, modern aesthetic." },
    { icon: <FaPuzzlePiece size={40} />, title: "Modular Code", desc: "Flexible components you can reuse in your own projects." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 text-center bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Discover Ideas, Stories & More.
          </h1>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Your daily dose of blogs on technology, creative coding, and professional growth.
          </p>
          <Link to="/blogs" className="inline-block mt-10 px-8 py-4 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition shadow-lg hover:shadow-emerald-300 transform hover:scale-105">
            Browse Blogs
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-slate-800">
            Why You'll Love MyBlog
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, idx) => <FeatureCard key={idx} {...f} />)}
          </div>
        </div>
      </section>

      {/* Lottie Animation Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 py-20 px-4">
          <div className="md:w-1/2">
            <Lottie
              loop play speed={1}
              src="https://assets9.lottiefiles.com/packages/lf20_x17ycm0v.json" // A different, cool animation
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-800">Animate Your Ideas</h2>
            <p className="text-slate-600 mt-4">We believe in dynamic content. Our blog integrates beautiful animations and interactive elements to bring technical topics to life.</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-slate-800 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-4">Ready to Dive In?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Your developer journey starts here. Let’s build something amazing together.
          </p>
          <Link to="/signup" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white font-bold transition shadow-lg hover:shadow-emerald-400/50 transform hover:scale-105">
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
}