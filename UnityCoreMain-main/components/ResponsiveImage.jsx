"use client";
import React, { useState, useEffect } from "react";

export const ResponsiveImage = ({ src }) => {
  const [imageSize, setImageSize] = useState({ width: 50, height: 50 });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 500) {
        setImageSize({ width: 50, height: 50 });
      } else if (screenWidth >= 300 && screenWidth < 500) {
        setImageSize({ width: 40, height: 40 });
      } else if (screenWidth < 300) {
        setImageSize({ width: 30, height: 30 });
      }
    };

    handleResize(); // Set initial image size
    window.addEventListener("resize", handleResize); // Update image size on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, []);

  return (
    <img
      alt="USDT"
      src={src}
      width={imageSize.width}
      height={imageSize.height}
    />
  );
};
