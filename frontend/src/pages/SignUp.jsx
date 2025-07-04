import React from "react";
import AuthForm from "../components/AuthForm";

export default function Signup() {
  return (
    <div className="flex min-h-screen">
      {/* Left side image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="https://source.unsplash.com/800x1000/?team,workspace"
          alt="Sign Up"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Create an Account
          </h2>
          <AuthForm type="signup" />
        </div>
      </div>
    </div>
  );
}
