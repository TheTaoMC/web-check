"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import UIDataTable from "./ui/UIDataTable";

function Monitoring() {
  const datas = [
    {
      code: "f230fh0g1",
      name: "Bamboo Watch",
      category: "Accessories",
      quantity: 24,
    },
    {
      code: "f230fh0g2",
      name: "Bamboo Watc2",
      category: "Accessorie2",
      quantity: 25,
    },
  ];

  return (
    <>
      <Navbar />
      <Container>
        <UIDataTable values={datas} />
      </Container>
    </>
  );
}

export default Monitoring;
