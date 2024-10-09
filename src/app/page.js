"use client"; // Add this at the top of the file

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api");
      console.log(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
}
