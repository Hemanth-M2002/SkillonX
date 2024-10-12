import React, { useState, useEffect } from "react";
import WebLogo from "../assets/logo.png";
import Confetti from "react-confetti";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function SurveyStartPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);

  const socialLinks = [
    {
      Icon: FaGithub,
      href: "https://github.com/Skillonx-dev",
      label: "GitHub",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/company/skillonx/",
      label: "LinkedIn",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/skillonx/",
      label: "Instagram",
    },
    {
      Icon: FaFacebook,
      href: "https://www.facebook.com/people/Skillonx-Classes/pfbid02fkYeqaq4GhbRnjhrWxU1vX1g6aZQ7Tuhm1HgQiAuCR7tMsedwKXeM1ucLTX89mHBl/?mibextid=ZbWKwL",
      label: "Facebook",
    },
    { Icon: FaTwitter, href: "https://twitter.com/skillonx", label: "Twitter" },
  ];

  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      setIsConfettiVisible(true);
      setTimeout(() => setIsConfettiVisible(false), 4000);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-purple-100 flex flex-col items-center justify-center p-2 sm:p-8 relative overflow-hidden">
      {isConfettiVisible && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <div className="absolute moving-gradient top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-blue-300 rounded-bl-full filter blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-purple-300 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-100 rounded-full filter blur-[120px] opacity-20 animate-blob"></div>
      </div>

      <div
        className={`w-full max-w-2xl relative transition-opacity duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="mb-4 sm:mb-8 flex justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={WebLogo}
            alt="Company Logo"
            className={`sm:h-28 md:h-32 transition-transform duration-300 ${
              isHovered
                ? "scale-110 rotate-15 shadow-lg shadow-md"
                : "scale-100"
            } rounded-xl `}
            style={{ backgroundColor: "transparent" }} // Ensure logo background is transparent
          />
        </div>

        <div className="backdrop-blur-lg bg-white/20 border border-white/45 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 space-y-4 font">
          <h2 className="sm:text-xl p-2 m-4 font-bold text-gray-900 text-center ">
            Thank you for submitting your application! We will review it and get
            back to you shortly.
            <br />
            <br className="text-sm leading-tight text-gray-900"/> For more information, please feel free to explore the
            following links:
          </h2>

          {/* Centering the icons across all screen sizes */}
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-6 lg:w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
