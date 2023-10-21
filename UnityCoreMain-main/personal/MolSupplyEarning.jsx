import React from "react";

export default function MolSupplyEarning() {
  return (
    <div className="box rounded-md border justify-center earninginfo">
      <span
        style={{
          color: "#657795",
          fontFamily: "Space Grotesk",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 200,
        }}
      >
        Your Supply Balance
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
