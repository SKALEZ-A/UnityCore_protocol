import React from "react";

export default function BorrowEarning() {
  return (
    <div
      style={{ width: "350px" }}
      className="box rounded-md w-[488px] border border-blue-200 bg-white flex  p-8 flex-col items-start gap-9"
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
        Total Available
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
        0
      </span>
    </div>
  );
}
