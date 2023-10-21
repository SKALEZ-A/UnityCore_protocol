import React from "react";

export default function BorrowEarning() {
  return (
    <div
      style={{ width: "350px" }}
      className="rounded-md  border border-blue-200 bg-white flex  p-8 flex-col items-start gap-9"
    >
      <span
        style={{
          color: "#657795",
          fontFamily: "Space Grotesk",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 200,
        }}
      >
        Total Market Size
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
