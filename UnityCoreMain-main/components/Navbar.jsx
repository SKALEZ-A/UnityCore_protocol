"use client";
import Image from "next/image";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { FaTwitter, FaDiscord, FaTelegram } from "react-icons/fa";
import { FaHome, FaStoreAlt, FaFileAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Avatar from "@mui/material/Avatar";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Polygon");
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setActiveLink(false);
  };

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const [effectActive, setEffectActive] = useState(false);

  const handleEffectChange = (isActive) => {
    setEffectActive(isActive);
  };

  const options = [
    { value: "Polygon", label: "Polygon", image: "/image.png" },
    { value: "Core", label: "Core", image: "/coredao.png" },
    { value: "Fantom", label: "Fantom", image: "/unitycore.png" },
  ];

  return (
    <div class="">
      <div className="mob_hid justify-between pt-[30px] items-center sidewidth  flex flex-col sidebg   h-full  w-[258px]">
        <div className="flex flex-col  justify-center items-center">
          <Image
            alt="unitycorelogo"
            src="/unitycore.png"
            height={50}
            width={50}
          />
          <h1 className="logostyle">Unity Core</h1>
          <p className="protocol">Protocol</p>
        </div>
        <div>
          {/* NavLinks */}
          <div>
            <div style={{ color: "#657795", fontSize: "17px" }}>
              <ul className="flex flex-col gap-4">
                <li className="flex nav-icon items-center gap-3">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.4724 6.03423C13.6019 5.19887 12.2274 5.19887 11.3568 6.03423L6.73035 10.4736C6.617 10.5823 6.54075 10.724 6.51242 10.8785C5.95828 13.9004 5.91738 16.994 6.39142 20.0295L6.50394 20.75H9.4804V14.5387C9.4804 14.1244 9.81619 13.7887 10.2304 13.7887H15.5988C16.013 13.7887 16.3488 14.1244 16.3488 14.5387V20.75H19.3253L19.4378 20.0295C19.9118 16.994 19.8709 13.9004 19.3168 10.8785C19.2885 10.724 19.2122 10.5823 19.0989 10.4736L14.4724 6.03423ZM10.3182 4.95191C11.7692 3.55965 14.06 3.55965 15.511 4.95191L20.1374 9.39125C20.478 9.71804 20.7071 10.1437 20.7922 10.608C21.3767 13.7956 21.4199 17.059 20.9198 20.2609L20.7391 21.4184C20.6643 21.8971 20.252 22.25 19.7675 22.25H15.5988C15.1846 22.25 14.8488 21.9142 14.8488 21.5V15.2887H10.9804V21.5C10.9804 21.9142 10.6446 22.25 10.2304 22.25H6.06168C5.57719 22.25 5.16491 21.8971 5.09015 21.4184L4.90939 20.2609C4.40934 17.059 4.45249 13.7956 5.03702 10.608C5.12215 10.1437 5.35123 9.71804 5.6918 9.39125L10.3182 4.95191Z"
                      fill="#657795"
                    />
                  </svg>

                  <a
                    onClick={handleLinkClick}
                    href="/"
                    className="nav-link hover:text-purple-700"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="flex nav-icon items-center gap-3">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4261 3.13407C13.0929 3.03164 12.7365 3.03164 12.4033 3.13407L9.41752 4.05174C7.88317 4.52333 6.42599 5.21666 5.09221 6.10977C4.24437 6.67748 4.64625 7.99997 5.66661 7.99997H20.1628C21.1831 7.99997 21.585 6.67748 20.7372 6.10977C19.4034 5.21666 17.9462 4.52333 16.4119 4.05174L13.4261 3.13407Z"
                      fill="#6717CE"
                    />
                    <path
                      d="M5.16467 21.5C5.16467 21.0858 5.50046 20.75 5.91467 20.75H19.9147C20.3289 20.75 20.6647 21.0858 20.6647 21.5C20.6647 21.9142 20.3289 22.25 19.9147 22.25H5.91467C5.50046 22.25 5.16467 21.9142 5.16467 21.5Z"
                      fill="#6717CE"
                    />
                    <path
                      d="M7.16467 17.5C7.16467 17.9142 7.50046 18.25 7.91467 18.25C8.32889 18.25 8.66467 17.9142 8.66467 17.5L8.66467 11.5C8.66467 11.0858 8.32889 10.75 7.91467 10.75C7.50046 10.75 7.16467 11.0858 7.16467 11.5L7.16467 17.5Z"
                      fill="#6717CE"
                    />
                    <path
                      d="M12.9147 18.25C12.5005 18.25 12.1647 17.9142 12.1647 17.5L12.1647 11.5C12.1647 11.0858 12.5005 10.75 12.9147 10.75C13.3289 10.75 13.6647 11.0858 13.6647 11.5V17.5C13.6647 17.9142 13.3289 18.25 12.9147 18.25Z"
                      fill="#6717CE"
                    />
                    <path
                      d="M17.1647 17.5C17.1647 17.9142 17.5005 18.25 17.9147 18.25C18.3289 18.25 18.6647 17.9142 18.6647 17.5V11.5C18.6647 11.0858 18.3289 10.75 17.9147 10.75C17.5005 10.75 17.1647 11.0858 17.1647 11.5V17.5Z"
                      fill="#6717CE"
                    />
                  </svg>
                  <a href="/market" className="nav-link hover:text-purple-700">
                    Markets
                  </a>
                </li>
                <li className="flex nav-icon items-center gap-3">
                  <Image
                    alt="stake"
                    src="/image 47.svg"
                    height={20}
                    width={20}
                  />
                  <a href="/faq" className="nav-link hover:text-purple-700">
                    Stakes
                  </a>
                </li>
                <li className="flex nav-icon items-center gap-3">
                  <Image
                    alt="stake"
                    src="/image 48.svg"
                    height={20}
                    width={20}
                  />
                  <a href="/faq" className="nav-link hover:text-purple-700">
                    Governance
                  </a>
                </li>
                <li className="flex nav-icon items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.16455 5.5C5.16455 3.98122 6.39577 2.75 7.91455 2.75H15.9014C16.4651 2.75 16.9943 3.02157 17.3231 3.47955L20.3362 7.67745C20.5497 7.97488 20.6646 8.33178 20.6646 8.6979V19.5C20.6646 21.0188 19.4333 22.25 17.9146 22.25H7.91455C6.39577 22.25 5.16455 21.0188 5.16455 19.5V5.5ZM7.91455 4.25C7.2242 4.25 6.66455 4.80964 6.66455 5.5V19.5C6.66455 20.1904 7.22419 20.75 7.91455 20.75H17.9146C18.6049 20.75 19.1646 20.1904 19.1646 19.5V9.39705H15.9146C15.5003 9.39705 15.1646 9.06126 15.1646 8.64705V4.25H7.91455Z"
                      fill="#657795"
                    />
                  </svg>
                  <a href="/faq" className="nav-link hover:text-purple-700">
                    Whitepaper
                  </a>
                </li>
                <li className="flex nav-icon items-center gap-3">
                  <Image
                    alt="stake"
                    src="/image 49.svg"
                    height={20}
                    width={20}
                  />
                  <a href="/faq" className="nav-link hover:text-purple-700">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-5">
          <Image alt="discord" src="/discord.svg" height={50} width={50} />

          <Image alt="telegram" src="/telegram.svg" height={50} width={50} />

          <Image alt="twitter" src="/twitter.svg" height={50} width={50} />
        </div>
      </div>
    </div>
  );
}
