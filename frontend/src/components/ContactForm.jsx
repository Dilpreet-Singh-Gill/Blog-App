import React from "react";

export default function ContactForm() {
  return (
    <form className="max-w-xl mx-auto mt-8 space-y-6">
      <div>
        <label className="block text-left text-gray-700 mb-2 font-medium">
          Name
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Your Name"
          required
        />
      </div>

      <div>
        <label className="block text-left text-gray-700 mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="you@example.com"
          required
        />
      </div>

      <div>
        <label className="block text-left text-gray-700 mb-2 font-medium">
          Message
        </label>
        <textarea
          className="w-full border border-gray-300 rounded px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Your message..."
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded transition"
      >
        Send Message
      </button>
    </form>
  );
}
