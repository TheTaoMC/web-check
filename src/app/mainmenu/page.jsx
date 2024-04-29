import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

function MainMenu() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center h-full justify-center">
        <div className="bg-blue-200 w-[20rem] text-center m-2 rounded-md text-5xl p-4 hover:bg-blue-400 cursor-pointer">
          <Link href="/monitoring">Monitoring</Link>
        </div>
        <div className="bg-blue-200 w-[20rem] text-center m-2 rounded-md text-5xl p-4 hover:bg-blue-400 cursor-pointer">
          <Link href="/check">Check</Link>
        </div>
        <div className="bg-blue-200 w-[20rem] text-center m-2 rounded-md text-5xl p-4 hover:bg-blue-400 cursor-pointer">
          <Link href="/management">Management</Link>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
