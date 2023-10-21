const { ethers } = require("ethers");

async function depositCORE() {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://rpc.test.btcs.network"
  );

  const ucoreLendingContractAddress =
    "0xD6a7b835d6B0B9506263eA64a73FE68716C2b02B";

  const UcoreLendingContractABI = [
    {
      inputs: [
        {
          internalType: "address",
          name: "_lendingToken",
          type: "address",
        },
        {
          internalType: "address",
          name: "_usdtAddress",
          type: "address",
        },
        {
          internalType: "address",
          name: "_usdcAddress",
          type: "address",
        },
        {
          internalType: "address",
          name: "_priceContractaddress",
          type: "address",
        },
        {
          internalType: "address",
          name: "_ucoreaddress",
          type: "address",
        },
        {
          internalType: "address",
          name: "_activateCollateralContract",
          type: "address",
        },
        {
          internalType: "address",
          name: "rewardContractAddress",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "InsufficientAmount",
      type: "error",
    },
    {
      inputs: [],
      name: "InsufficientEthers",
      type: "error",
    },
    {
      inputs: [],
      name: "InsufficientIceToken",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "string",
          name: "collateral",
          type: "string",
        },
      ],
      name: "CollateralActivated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "collateralType",
          type: "string",
        },
      ],
      name: "CollateralDeactivated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "CoreWithdrawn",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "CorerewardCLiamed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Deposited",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Received",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "USDCBorrowed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "USDCWithdrawn",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "USDTBorrowed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "USDTWithdrawn",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "UsdcrewardCLiamed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "UsdtrewardCLiamed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "WithdrewUSDC",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "WithdrewUSDT",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Withdrewdeposit",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "coreBorrowed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "usdcDeposited",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "usdtDeposited",
      type: "event",
    },
    {
      inputs: [],
      name: "TotalCoreBorrowed",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "TotalCoreDeposited",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "TotalUSDCBorrowed",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "TotalUSDCdeposited",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "TotalUSDTBorrowed",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "TotalUSDTdeposited",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "activateCollateralAddress",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "activateCollateralContract",
      outputs: [
        {
          internalType: "contract IActivateCollateral",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "borrowCoreBasedOnCollateral",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "borrowUSDCbasedonCollateral",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "borrowUSDTbasedonCollateral",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "borrowers",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "callCalculateLTVRatio",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "core_price",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "depositCore",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "depositFromTs",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "depositUSDC",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "depositUSDT",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "depositors",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getDepositors",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getMinCoreDeposit",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getMinUSDCDeposit",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getMinUSDTDeposit",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getPrices",
      outputs: [
        {
          internalType: "uint256",
          name: "usdtPrice",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "corePrice",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "usdcPrice",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getReward",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getSelectedCollateral",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "getUserBalance",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "coreborrowBalance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "usdtborrowBalance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "usdcborrowBalance",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isDepositFrozen",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "COREdepositFrozen",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "USDTdepositFrozen",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "USDCdepositFrozen",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "userHasClaimedRewards",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "rewardBalancesCORE",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "rewardBalancesUSDT",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "rewardBalancesUSDC",
              type: "uint256",
            },
            {
              internalType: "enum UnityCoreLendingProtocol.CollateralType",
              name: "selectedCollateral",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "isCollateralActive",
              type: "bool",
            },
          ],
          internalType: "struct UnityCoreLendingProtocol.UserBalance",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          internalType: "enum UnityCoreLendingProtocol.CollateralType",
          name: "collateral",
          type: "uint8",
        },
      ],
      name: "getUserCollateralBalance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "getUserCollateralInfo",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "depositFromTSofCORE",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "depositFromTSofUSDT",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "depositFromTSofUSDC",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "coreBalance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "usdtBalance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "usdcBalance",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "userHasClaimedRewards",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "min_usdt_deposit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "min_usdc_deposit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minCoredeposit",
              type: "uint256",
            },
          ],
          internalType: "struct UnityCoreLendingProtocol.UserCollateralInfo",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "isBorrower",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "isLiquidated",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "lastClaimTimestamp",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "lendingToken",
      outputs: [
        {
          internalType: "contract LendingPoolToken",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "liquidationThreshold",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "minCoredeposit",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "min_usdc_deposit",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "min_usdt_deposit",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "priceContract",
      outputs: [
        {
          internalType: "contract PriceContract",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "rewardContract",
      outputs: [
        {
          internalType: "contract IReward",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "rewardRate",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "rewardsContract",
      outputs: [
        {
          internalType: "contract RewardsContract",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_activateCollateralAddress",
          type: "address",
        },
      ],
      name: "setActivateCollateralAddress",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_rewardRate",
          type: "uint256",
        },
      ],
      name: "setRewardRate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "someFunction",
      outputs: [],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "ucoreClaimableBalance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "ucoreToken",
      outputs: [
        {
          internalType: "contract IERC20",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "usdcPrice",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "usdcToken",
      outputs: [
        {
          internalType: "contract IERC20",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "usdtPrice",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "usdtToken",
      outputs: [
        {
          internalType: "contract IERC20",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "userBalances",
      outputs: [
        {
          internalType: "uint256",
          name: "coreborrowBalance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "usdtborrowBalance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "usdcborrowBalance",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "isDepositFrozen",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "COREdepositFrozen",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "USDTdepositFrozen",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "USDCdepositFrozen",
          type: "bool",
        },
        {
          internalType: "bool",
          name: "userHasClaimedRewards",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "rewardBalancesCORE",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "rewardBalancesUSDT",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "rewardBalancesUSDC",
          type: "uint256",
        },
        {
          internalType: "enum UnityCoreLendingProtocol.CollateralType",
          name: "selectedCollateral",
          type: "uint8",
        },
        {
          internalType: "bool",
          name: "isCollateralActive",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ];

  const privateKey =
    "0febd531724d95ed9e8a95434eff1574cdcdec9ff896c7189caba809d7fbebd6";

  // Convert the private key to a valid format
  const formattedPrivateKey = privateKey.startsWith("0x")
    ? privateKey
    : "0x" + privateKey;

  const signer = new ethers.Wallet(privateKey, provider);

  const ucoreLendingContract = new ethers.Contract(
    ucoreLendingContractAddress,
    UcoreLendingContractABI,
    signer
  );

  // Deposit CORE
  const amountToDeposit = ethers.utils.parseUnits("100");
  const gasLimit = 200000; // Set an appropriate gas limit for the transaction

  // Call the deposit function on the contract
  const tx = await ucoreLendingContract.depositCore({
    value: amountToDeposit,
    gasLimit: gasLimit,
  });

  // Wait for the transaction to be mined
  const receipt = await tx.wait();

  console.log("CORE deposited successfully!");
}

depositCORE()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
