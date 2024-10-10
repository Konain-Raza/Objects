import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-900">
      <div className="flex flex-col items-center">
        <img
          src="https://objects.pk/wp-content/uploads/2022/01/objects-logo-web-01.png"
          alt="Loading Logo"
          className="animate-bounce "
        />
        <h1 className="text-black">
          Reshaping Businesses to Meet the Digital Age.
        </h1>
        <div className="w-16 h-16 border-8 border-t-8 border-gray-200 rounded-full animate-spin border-t-blue-500"></div>
      </div>
    </div>
  );
};

export default Loading;
