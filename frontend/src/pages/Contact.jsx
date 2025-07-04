import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h1>
      <p className="text-gray-600 leading-relaxed mb-8 text-center">
        Have questions, suggestions, or just want to say hello? We'd love to hear from you!
        Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
}
