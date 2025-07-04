import React from "react";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Stay Updated
        </h2>
        <p className="text-gray-600 mb-6">
          Have questions, suggestions, or just want to say hello? We'd love to hear from you!
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 rounded bg-teal-500 text-white hover:bg-teal-600 transition"
        >
          Contact Us         </Link>
      </div>
    </section>
  );
}
