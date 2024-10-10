"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Login from "./components/Login";
import Table from "./components/Table";
import Loading from "./components/Loading";

export default function Home() {
  const [headers, setHeaders] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const getSheets = await axios.get(
          "http://localhost:3000/api/sheets/get"
        );
        const sheetsData = getSheets.data.data;
        setHeaders(sheetsData[0] || []);
        setData(sheetsData.slice(1) || []);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (isAuth) {
      fetchData();
    }
  }, [isAuth]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!isAuth) {
    return <Login setisAuth={setIsAuth} />;
  }

  return (
    <div className=" bg-gray-900">
      <Navbar user={data} />
      <Form />
      <Table headers={headers} data={data} />
    </div>
  );
}
