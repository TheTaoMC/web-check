"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import UIDataTable from "./ui/UIDataTable";

function Monitoring() {
  const [datas, setDatas] = useState([]);

  const getDatas = async () => {
    const response = await fetch("http://localhost:3000/api/getMonitoring", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const res = await response.json();
    console.log(res);
    setDatas(res);
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      await getDatas();
    }, 5000); // เรียก getDatas ทุกๆ 5 วินาที

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <div className="pt-4">
          <UIDataTable values={datas} />
        </div>
      </Container>
    </>
  );
}

export default Monitoring;
