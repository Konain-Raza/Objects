"use client";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="https://objects.pk/wp-content/uploads/2022/01/Objects-Logo-l.webp"
            width={32}
            height={32}
            alt="Objects Logo"
            className="h-8 object-contain"
          />
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            Objects
          </span>
        </a>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/265/265674.png"
            width={32}
            height={32}
            alt="Profile Icon"
            className="h-8 object-contain"
          />
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Konain
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
