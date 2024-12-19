"use client";

import React from "react";
import confetti from "canvas-confetti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `
"use client";

import React from "react";
import confetti from "canvas-confetti";

const CustomButton = () => {
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <button
      onClick={handleConfetti}
      className="px-6 py-3 bg-gradient-to-br from-purple-700 to-pink-800 
                 text-white font-semibold rounded-full shadow-lg 
                 hover:scale-105 transition-transform duration-300"
    >
      Press me
    </button>
  );
};

export default CustomButton;
`;

const CodePreview = () => {
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div  className="mx-12 p-8 ">
    <h1 className="text-6xl ml-6 font-bold">Customization made easy  <br/>
      
     <span   className="text-pink-500 to-fuchsia-600">Just Copy and Paste</span> </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-black text-white">
     
        
     
      {/* Left Side: Code */}
      <div className="p-6 overflow-auto">
        <h2 className="text-2xl mb-4 font-bold">Code</h2>
        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          wrapLongLines
          customStyle={{ borderRadius: "8px", background: "#1e1e2e" }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>

      {/* Right Side: Preview */}
      <div className="flex items-center justify-center bg-gradient-to-br from-pink-500 to-fuchsia-600 p-6">
        <button
          onClick={handleConfetti}
          className="px-6 py-3 bg-gradient-to-br from-purple-700 to-pink-800 
                     text-white font-semibold rounded-full shadow-lg 
                     hover:scale-105 transition-transform duration-300"
        >
          Press me
        </button>
      </div>
    </div>
    </div>
  );
};

export default CodePreview;
