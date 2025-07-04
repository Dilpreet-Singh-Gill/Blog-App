import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    { name: "Jane Doe", feedback: "This blog helped me land my first developer job!" },
    { name: "John Smith", feedback: "The tutorials are clear, practical, and easy to follow." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">What Our Readers Say</h2>
        <div className="space-y-8">
          {testimonials.map((t, index) => (
            <blockquote key={index} className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
              <footer className="text-gray-600 font-semibold">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
