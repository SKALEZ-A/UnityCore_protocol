import React from "react";

export default function BorrowEarning() {
  return (
    <div>
      <div className="box mob_hid rounded-md w-[388px] border border-blue-200 bg-white flex  p-8 flex-col items-start gap-9">
        <span
          style={{
            color: "#657795",
            fontFamily: "Space Grotesk",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 200,
          }}
        >
          Your Borrow Balance
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

        {/* Mobile */}
      </div>

      <div className="box mob_show w-full mol_box_style">
        <span
          style={{
            color: "#657795",
            fontFamily: "Space Grotesk",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 200,
          }}
        >
          Your Borrow Balance
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
    </div>
  );
}
