import React from "react";
import AuthForm from "../components/AuthForm";

export default function Signup() {
  return (
    <div className="flex min-h-[calc(100vh-80px)]"> {/* Adjust for header height */}
      {/* Left side image */}
      <div className="w-1/2 hidden md:block bg-slate-100">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="A modern workspace"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-12 bg-white">
        <AuthForm type="signup" />
      </div>
    </div>
  );
}