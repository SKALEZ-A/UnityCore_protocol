import React from "react";

export default function SupplyEarning() {
  return (
    <div>
      <div className="box mob_hid rounded-md border justify-center border-blue-200 bg-white flex p-8 flex-col items-start gap-9 w-[388px] min-w-0">
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

      {/* Mobile */}
      <div className="mob_show w-full   relative  mol_box_style  ">
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
    </div>
  );
}
