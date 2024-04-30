"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Container from "./Container";

function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className="bg-black">
        <Container>
          <div className="text-right h-10 text-white">
            <Link href="/">Logout</Link>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Navbar;
