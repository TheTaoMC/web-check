import React from "react";

function MainMenu() {
  return (
    <>
      <div></div>
      <div className="text-right">Logout</div>
      <div className="flex flex-col items-center h-full justify-center">
        <div className="bg-blue-200 w-[20rem] text-center m-2 rounded-md text-5xl p-4 hover:bg-blue-400 cursor-pointer">
          Monitoring
        </div>
        <div className="bg-blue-200 w-[20rem] text-center m-2 rounded-md text-5xl p-4 hover:bg-blue-400 cursor-pointer">
          Check
        </div>
        <div className="bg-blue-200 w-[20rem] text-center m-2 rounded-md text-5xl p-4 hover:bg-blue-400 cursor-pointer">
          Management
        </div>
      </div>
    </>
  );
}

export default MainMenu;
