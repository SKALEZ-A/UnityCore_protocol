import React, { useState, useEffect } from "react";

const AnimatedAlert = ({ type, message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 3000); // Hide the alert after 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  const getAlertClass = () => {
    if (type === "success") {
      return "bg-green-500";
    } else if (type === "error") {
      return "bg-red-500";
    } else if (type === "warning") {
      return "bg-yellow-500";
    } else {
      return "bg-gray-500";
    }
  };

  return (
    <div
      className={`fixed bottom-5 right-5 p-4 rounded-md text-white ${getAlertClass()} ${
        show ? "animate-slide-in" : "animate-slide-out"
      }`}
    >
      <p>{message}</p>
      <button
        className="mt-2 px-3 py-1 rounded-md bg-white text-gray-700 hover:bg-gray-200"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default AnimatedAlert;
