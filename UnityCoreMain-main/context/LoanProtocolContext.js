"use client";
import React, { createContext, useRef, useEffect, useState } from "react";
//Internal Import
import {
  CheckIfWalletConnected,
  ConnectWallet,
  connectingwithContract,
} from "@utils/apiFeatures";
import {
  LoanProtocolAddress,
  LoanProtocolABI,
  MytokenAddress,
  MytokenABI,
  IceTokenAddress,
  IceTokenABI,
} from "@context/constant";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

export const LoanProtocolContext = createContext();

export const LoanProtocolProvider = ({ children }) => {
  //USE STATE
  const [walletaddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [APY, setAPY] = useState("");
  const [priceChange, setPriceChange] = useState("");
  const [priceMovement, setPriceMovement] = useState("");
  const [coreprice, setCorePrice] = useState("");
  const [walletBalance, setWalletBalance] = useState("");
  const [depositerror, setdepositerror] = useState(false);
  const [userbalance, setuserBalance] = useState("");
  const [Connecterror, setConnectError] = useState("");
  const [userborrowedAmount, setuserBorrowedAmount] = useState("");
  const [userbowrrowedAmountforiceToken, setuserbowrrowedAmountforiceToken] =
    useState("");
  const [userbalanceforicetoken, setuserbalanceforicetoken] = useState("");
  const [ContractBalance, setContractBalance] = useState("");
  const [ContractBalanceforicetoken, setContractBalanceForIceToken] =
    useState("");
  const [tokentotalborrow, setTotalTokenborrowed] = useState("");
  const [invalidNetworkError, setinvalidNetworkError] = useState("");
  const [validNetwork, setvalidNetwork] = useState("");
  const [depositSuccess, setDepositSucess] = useState(false);
  const [borrowSuccess, setBorrowSuccess] = useState(false);
  const [borrowerror, setBorrowError] = useState(false);
  const [ucorebalance, setucorebalance] = useState("");
  const [yourborrow, setYourborrow] = useState("");
  const [metamaskAlert, setMetamaskAlert] = useState(false);
  const { BigNumber } = require("ethers");

  const previousPriceRef = useRef(null);

  useEffect(() => {
    fetchData();
    checkwalletBalance();
    Connectwallet();
    fetchAPY();
    fetchuserBalance();
    switchN();
    TokenBalanceOfUser();
    Tokenborrowed();
    TotalCoreDeposit();
    Totalborrowed();
  }, []);

  useEffect(() => {
    // Function to fetch and update the core price
    async function updateCorePrice() {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
          LoanProtocolAddress,
          LoanProtocolABI,
          signer
        );
        const viewdep = await contract.core_price();
        const corePriceInWei = viewdep.toString();
        const corePriceInDollars = ethers.utils.formatUnits(corePriceInWei, 18);

        // Check if the price has changed
        if (coreprice !== "") {
          const previousPrice = parseFloat(coreprice);
          const currentPrice = parseFloat(corePriceInDollars);
          if (currentPrice > previousPrice) {
            setPriceChange("green");
          } else if (currentPrice < previousPrice) {
            setPriceChange("red");
          } else {
            setPriceChange("");
          }
        }

        setCorePrice(corePriceInDollars);
        console.log("Core Price:", corePriceInDollars);
      } catch (error) {
        console.log(error);
      }
    }

    // Call the updateCorePrice function initially
    updateCorePrice();

    // Continuously update the core price
    const intervalId = setInterval(updateCorePrice, 3000); // 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [coreprice]);

  //FECTH DATA TIME OF PAGE LOAD
  const fetchData = async () => {
    try {
      //GET CONTRACT
      const contract = await connectingwithContract();

      //Fetch user Balance for iceToken
      const userBalanceforicetoken = await contract.userBalance_For_IceToken();
      setuserbalanceforicetoken(userBalanceforicetoken);

      //Fetch user Borrowed Amount
      const userBorrowedAmount = await contract.userBorrowedAmount();
      setuserBorrowedAmount(userBorrowedAmount);

      //Fetch the APY

      //Fetch the contractBalance for the CORE deposited Value
      // const contractBalance = await contract.Contractbalance();
      // setContractBalance(contractBalance)

      //Fetch All bnorrowed Amount in the Contract
      const totalBorrowed = await contract.TotalBorrowed();
      setTotalTokenborrowed(totalBorrowed);

      //FETCH Contract balance deposit for ice Token
      const contract_IceTokenBal =
        await contract.Contractbalance_for_IceToken();
      setContractBalanceForIceToken(contract_IceTokenBal);

      //Fetch user Borrowed Amount For Ice Token
      const userBorrowedAmountIceToken =
        await contract.userBorrowedAmount_IceToken();
      setuserbowrrowedAmountforiceToken(userBorrowedAmountIceToken);

      //Fetch the ETH in user's wallet
    } catch (error) {
      setError("Please install and Connect to Metamask ");
    }
  };

  const checkwalletBalance = async () => {
    try {
      const web3Modal = new Web3Modal();
      const provider = await web3Modal.connect(); // Connect to the selected provider
      const ethersProvider = new ethers.providers.Web3Provider(provider);
      const signer = ethersProvider.getSigner();
      const address = await signer.getAddress();
      const balance = await ethersProvider.getBalance(address);
      const balanceInEth = ethers.utils.formatEther(balance);
      setWalletBalance(balanceInEth);
      console.log("Wallet Balance:", balanceInEth);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      setWalletBalance(null);
    }
  };

  //Switch and Alerrt user to use correct Netweork
  async function switchN() {
    const provider = window.ethereum;
    const CoreChainId = "0x45b";

    if (!provider) {
      console.log("Metamask is not installed, please install!");
    } else {
      const chainId = await provider.request({ method: "eth_chainId" });

      if (chainId === CoreChainId) {
        console.log("Bravo!, you are on the correct network");
        setvalidNetwork("You are connected to the right network");
      } else {
        console.log("oulalal, switch to the correct network");
        setinvalidNetworkError(
          "You are connected to the wrong network, please switch your Network to Core Mainnet follow metamask Prompt"
        );
        try {
          await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: CoreChainId }],
          });
          console.log("You have succefully switched to Binance Test network");
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            console.log(
              "This network is not available in your metamask, please add it"
            );
            try {
              await provider.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0x45b",
                    chainName: "CORE test network",
                    rpcUrls: ["https://rpc.test.btcs.network/"],
                    blockExplorerUrls: ["https://scan.test.btcs.network/"],
                    nativeCurrency: {
                      symbol: "tcore", // 2-6 characters long
                      decimals: 18,
                    },
                  },
                ],
              });
            } catch (addError) {
              // handle "add" error
              console.log(addError);
            }
          }
        }
      }
    }
  }

  //Fetch user Balance
  const fetchuserBalance = async () => {
    try {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      let signer = await provider.getSigner();
      const connectAccount = await ConnectWallet();
      let contract = new ethers.Contract(
        LoanProtocolAddress,
        LoanProtocolABI,
        signer
      );
      const userBalance = await contract.userBalance(connectAccount);
      const ethValue = ethers.utils.formatEther(userBalance);
      setuserBalance(ethValue.substring(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  //Fetch APY
  const fetchAPY = async () => {
    try {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      let signer = await provider.getSigner();
      let contract = new ethers.Contract(
        LoanProtocolAddress,
        LoanProtocolABI,
        signer
      );
      const coreApy = await contract.dailyAPY();
      console.log("APY:", coreApy.toString());

      setAPY(coreApy.toString());
    } catch (error) {
      console.log(error);
    }
  };

  //CHECK FOR UCORE BALANCE OF USER
  async function TokenBalanceOfUser() {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = await provider.getSigner();
    const connectAccount = await ConnectWallet();
    let contract = new ethers.Contract(MytokenAddress, MytokenABI, signer);
    const viewdep = await contract.balanceOf(connectAccount);
    setucorebalance(viewdep.toString());
    console.log("The ucore bal:", viewdep.toString());
  }

  //DEPOIT WITH CORE FUNCTION
  const deposit = async (amount) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        LoanProtocolAddress,
        LoanProtocolABI,
        signer
      );

      // const gasLimit = await contract.estimateGas.deposit({ value: ethers.utils.parseEther(amount) });
      // await Contract.EnterLottery({value: ethers.utils.parseUnits(amount, "ether") ,gasLimit: 400000}).value
      const depositFunds = await contract.depositCore({
        value: ethers.utils.parseEther(amount),
        gasLimit: 500000,
      });

      setLoading(true);
      await depositFunds.wait();
      setLoading(false);
      setDepositSucess(true);
      window.location.reload();
    } catch (error) {
      setdepositerror(true);
      console.log(error);
    }
  };

  //Borrow UCORE after depositing WITH CORE FUNCTION
  const borrow = async (amount) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        LoanProtocolAddress,
        LoanProtocolABI,
        signer
      );

      const borrowAmount = BigNumber.from(amount); // Convert amount to BigNumber object
      const borrowFunds = await contract.borrow(borrowAmount, {
        gasLimit: 500000,
      });

      setLoading(true);
      await borrowFunds.wait();
      setLoading(false);
      setBorrowSuccess(true);
      window.location.reload();
    } catch (error) {
      setBorrowError(true);
      console.log(error);
    }
  };

  async function Tokenborrowed() {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = await provider.getSigner();
    const contract = new ethers.Contract(
      LoanProtocolAddress,
      LoanProtocolABI,
      signer
    );
    const connectAccount = await ConnectWallet();
    const viewdep = await contract.userBorrowedAmount(connectAccount);
    setYourborrow(viewdep.toString());
  }

  async function TotalUCoreDeposit() {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = await provider.getSigner();
    const contract = new ethers.Contract(
      LoanProtocolAddress,
      LoanProtocolABI,
      signer
    );
    const viewdep = await contract.TotalBorrowed();
    document.getElementById("i").innerHTML = viewdep;
  }

  async function Totalborrowed() {
    try {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      let signer = await provider.getSigner();
      const contract = new ethers.Contract(
        LoanProtocolAddress,
        LoanProtocolABI,
        signer
      );
      const totalBorrowed = await contract.TotalBorrowed();
      setTotalTokenborrowed(totalBorrowed.toString());
    } catch (error) {
      console.log(error);
    }
  }

  async function TotalCoreDeposit() {
    try {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      let signer = await provider.getSigner();
      const contract = new ethers.Contract(
        LoanProtocolAddress,
        LoanProtocolABI,
        signer
      );
      const viewdep = await contract.Contractbalance();
      const ethValue = ethers.utils.formatEther(viewdep);
      setContractBalance(ethValue);
    } catch (error) {
      console.log(error);
    }
  }
  async function Connectwallet() {
    try {
      const connectAccount = await ConnectWallet();
      setWalletAddress(connectAccount);
    } catch (error) {
      console.log("error");
      setMetamaskAlert(true);
    }
  }

  return (
    <LoanProtocolContext.Provider
      value={{
        walletaddress,
        priceChange,
        coreprice,
        Connectwallet,
        loading,
        error,
        walletBalance,
        walletaddress,
        depositerror,
        userbalance,
        userbalanceforicetoken,
        userborrowedAmount,
        userbowrrowedAmountforiceToken,
        tokentotalborrow,
        ContractBalance,
        ContractBalanceforicetoken,
        deposit,
        APY,
        invalidNetworkError,
        validNetwork,
        setdepositerror,
        depositSuccess,
        setDepositSucess,
        borrowSuccess,
        borrowerror,
        setBorrowError,
        setBorrowSuccess,
        borrow,
        ucorebalance,
        yourborrow,
        setLoading,
        priceMovement,
        metamaskAlert,
      }}
    >
      {children}
    </LoanProtocolContext.Provider>
  );
};
