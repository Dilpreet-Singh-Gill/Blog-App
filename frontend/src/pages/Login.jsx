import React from "react";
import AuthForm from "../components/AuthForm";

export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left side image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="https://source.unsplash.com/800x1000/?coding,blog"
          alt="Login"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Login to Your Account
          </h2>
          <AuthForm type="login" />
        </div>
      </div>
    </div>
  );
}
