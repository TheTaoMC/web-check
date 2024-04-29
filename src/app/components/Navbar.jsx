"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Container from "./Container";

function Navbar() {
  const router = useRouter();
  return (
    <>
      <Container>
        <div className="text-right">
          <Link href="/">Logout</Link>
        </div>
      </Container>
    </>
  );
}

export default Navbar;
