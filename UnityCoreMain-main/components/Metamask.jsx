'use client'
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MetamaskAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    checkMetamaskInstalled();
  }, []);

  const checkMetamaskInstalled = () => {
    if (typeof window.ethereum === "undefined") {
      setShowAlert(true);
    }
  };

  return showAlert ?      
  toast.error(<p>Please Install Metamask to have full access to the dApp</p>, {
    position: "top-left",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    draggablePercent: 0
  }) : null;
};

export default MetamaskAlert;
