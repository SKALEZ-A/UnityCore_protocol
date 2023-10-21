import { Box } from "@mui/system";
import React from "react";

export default function DropdownMenu({ menuOpen }) {
  return (
    <div
      className="fixed top-0 left-0 h-[243px] right-0 bg-white mt-1 z-20 flex flex-col gap-2"
      style={{
        maxHeight: menuOpen ? "100%" : "0",
        transition: "max-height 0.3s ease-in-out",
        overflow: "hidden",
        transform: `translateY(${menuOpen ? "0%" : "-100%"})`,
      }}
    >
      <div className="absolute top-0 right-0 p-2" style={{ zIndex: 1 }}>
        <button onClick={menuOpen}>
          <svg
            width="37"
            height="38"
            viewBox="0 0 57 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.4251 37.3826L37.0723 20.7355"
              stroke="#657795"
              stroke-width="3.53139"
              stroke-linecap="round"
            />
            <path
              d="M20.4251 20.7354L37.0723 37.3826"
              stroke="#657795"
              stroke-width="3.53139"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
      <div
        className="flex flex-col gap-2"
        style={{
          height: menuOpen ? "calc(100% - 40px)" : "0",
          overflowY: "auto",
          position: "relative",
          marginTop: "40px", // Adjust the top margin to make space for the button
        }}
      >
        <Box className="menu-mol p-2">Dashboard</Box>
        <Box className="menu-mol p-2">Markets</Box>
        <Box className="menu-mol p-2">Stakes</Box>
        <Box className="menu-mol p-2">Governance</Box>
        <Box className="menu-mol p-2">FAQ</Box>
      </div>
    </div>
  );
}
