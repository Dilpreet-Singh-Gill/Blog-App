import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback: "This blog helped me land my first developer job! The guidance was spot-on and easy to follow.",
      role: "Frontend Developer"
    },
    {
      name: "John Smith",
      feedback: "The tutorials are clear, practical, and easy to follow. I improved my coding skills in no time.",
      role: "Full Stack Engineer"
    },
    {
      name: "Sarah Lee",
      feedback: "A goldmine for developers! Real-world examples made concepts click instantly.",
      role: "Software Engineer"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          What Our Readers Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We’re proud to have helped thousands of developers grow their skills and careers.
          Here’s what some of them have to say:
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between"
            >
              <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
              <div className="mt-auto">
                <h4 className="font-semibold text-teal-600">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
