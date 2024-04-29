import React from "react";

function Container({ children }) {
  return (
    <>
      <div className="w-[80%] m-auto">{children}</div>
    </>
  );
}

export default Container;
