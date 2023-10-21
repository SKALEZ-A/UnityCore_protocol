"use client";
import React, { useState, useEffect } from "react";

export default function ProgressBar() {
  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += 5;
      setProgress(value);
      if (value >= 100) {
        clearInterval(interval);
      }
    }, 1000); // Update every 1 second (adjust as needed)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  const [progress, setProgress] = useState(6);
  return (
    <div>
      {" "}
      <div className="flex flex-row items-center justify-center  justify-between gap-10">
        <div className="flex flex-row gap-1">
          <p className="smallPP">Borrow Limit:</p>
          <p style={{ color: "#000" }}>80%</p>
        </div>
        <div className="w-full items-center justify-center bg-gray-100 h-[11px] rounded-full overflow-hidden">
          <div
            className=" h-full transition-width"
            style={{ width: `${progress}%`, backgroundColor: "#651BD0" }}
          />
        </div>
        <h1 style={{ color: "#000" }}>$2,500</h1>
      </div>
    </div>
  );
}
