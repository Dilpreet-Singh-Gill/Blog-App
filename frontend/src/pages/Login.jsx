import React from "react";
import AuthForm from "../components/AuthForm";

export default function Login() {
  return (
    <div className="flex min-h-[calc(100vh-80px)]"> {/* Adjust for header height */}
      {/* Left side form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-12 bg-white">
        <AuthForm type="login" />
      </div>

      {/* Right side image */}
      <div className="w-1/2 hidden md:block bg-slate-100">
        <img
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
          alt="Coding on a laptop"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}