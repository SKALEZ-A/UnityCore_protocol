import React from "react";

export default function NetAPY() {
  return (
    <div>
      <div className="box mob_hid rounded-md border  w-[388px] border-blue-200 bg-white flex p-8 flex-col items-start gap-9  min-w-0">
        <span
          style={{
            color: "#657795",
            fontFamily: "Space Grotesk",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 200,
          }}
        >
          Your Net APY
        </span>

        <span
          style={{
            color: "#4CAF50",
            fontFamily: "Space Grotesk",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >
          42.7%
        </span>
      </div>

      {/* Mobile */}
      <div className="mob_show w-full mol_box_style  ">
        <span
          style={{
            color: "#657795",
            fontFamily: "Space Grotesk",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 200,
          }}
        >
          Your Net APY
        </span>

        <span
          style={{
            color: "#4CAF50",
            fontFamily: "Space Grotesk",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >
          42.7%
        </span>
      </div>
    </div>
  );
}
