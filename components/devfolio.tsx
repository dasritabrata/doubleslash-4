"use client"; 

import { useEffect } from "react";

export default function DevfolioButton() {
  useEffect(() => {
    const scriptId = "devfolio-sdk";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div 
      className="apply-button" 
      data-hackathon-slug="YOUR-HACKATHON-SLUG" 
      data-button-theme="light"
      style={{ height: "44px", width: "312px" }}
    ></div>
  );
}
