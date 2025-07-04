import React from "react";
import HeroSection from "../components/HeroSection";
import BlogGrid from "../components/BlogGrid";
// import AboutSection from "../components/AboutSection";

export default function Home() {
  const featuredPosts = [
    { id: 1, title: "Understanding React Hooks", excerpt: "Hooks let you use state and lifecycle..." },
    { id: 2, title: "JWT Authentication", excerpt: "Secure your APIs with JSON Web Tokens..." },
  ];

  const latestPosts = [
    { id: 3, title: "Tailwind CSS Tips", excerpt: "Build beautiful UIs quickly..." },
    { id: 4, title: "Express + MongoDB", excerpt: "RESTful APIs step by step..." },
    { id: 5, title: "Dark Mode in React", excerpt: "Toggle themes easily with context..." },
  ];

  return (
    <div>
      <HeroSection />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Featured Blogs
          </h2>
          <BlogGrid posts={featuredPosts} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Latest Posts
          </h2>
          <BlogGrid posts={latestPosts} />
        </div>
      </section>

      {/* <AboutSection /> */}
    </div>
  );
}
