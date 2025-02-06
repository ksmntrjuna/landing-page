import React from "react";

const LoadingIndicator = ({ progress }) => {
  const radius = 50; // Jari-jari lingkaran
  const circumference = 2 * Math.PI * radius; // Keliling lingkaran
  const strokeDashoffset = circumference - (progress / 100) * circumference; // Menghitung nilai offset berdasarkan progres

  return (
    <div className="fixed top-1/3 right-5 z-50 flex flex-col items-center">
      <div className=" font-mono text-white">Progress...</div>
      <svg
        className="w-24 h-24"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="white"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="text-purple-600" // Tailwind color class for the progress
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          fontSize="18"
          fill="currentColor" // Tailwind color class for the text
          fontWeight="bold"
          className="text-white"
        >
          {Math.round(progress)}%
        </text>
      </svg>
    </div>
  );
};

export default LoadingIndicator;
