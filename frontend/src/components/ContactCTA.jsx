import React from "react";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white shadow-xl rounded-2xl p-10 border border-gray-100">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
            Stay Connected
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Have questions, suggestions, or just want to say hello?
            We’d love to hear from you and help in any way we can.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 rounded-full bg-teal-500 text-white font-medium shadow-md hover:shadow-lg hover:bg-teal-600 transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
