"use client";
import React from "react";
import { useState } from "react";

export default function BorrowEarning() {
  const [totalBorrower, setTotalBorrower] = useState(0);

  return (
    <div className="box rounded-md w-[388px] border border-blue-200 bg-white flex  p-8 flex-col items-start gap-9">
      <span
        style={{
          color: "#4CAF50",
          fontFamily: "Space Grotesk",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 200,
        }}
      >
        Total Borrowers
      </span>

      <span
        style={{
          color: "#002237",
          fontFamily: "Space Grotesk",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 700,
        }}
      >
        $9,939,383
      </span>
    </div>
  );
}

//
