import Lottie from "lottie-react";
import React from "react";
import loadingAnimation from "../assets/loading.json";
import logo from "../assets/heroavater.png";

export default function LoadingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-800 py-12 sm:px-6 lg:px-8">
      <img src={logo} className="h-32" alt="cubbi" />
      <div className="mb-24 sm:mx-auto sm:w-full sm:max-w-md">
        <Lottie animationData={loadingAnimation} style={{ height: 180 }} loop />
      </div>
    </div>
  );
}
