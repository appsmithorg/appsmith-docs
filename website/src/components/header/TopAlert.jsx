import React, { useState, useEffect } from "react";
import { DeleteIcon } from "../icons";
import BrowserOnly from "@docusaurus/BrowserOnly";

export const TopAlert = ({ onClose }) => {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const alertState = JSON.parse(localStorage.getItem("topAlert"));
    if (alertState && alertState.closed) {
      setClosed(true);
      onClose ? onClose() : () => {};
    }
  }, []);

  const handleClose = () => {
    setClosed(true);
    localStorage.setItem("topAlert", JSON.stringify({ closed: true }));
    onClose ? onClose() : () => {};
  };

  if (closed) return null;

  return (
    <BrowserOnly>
      {() => (
        <>
          <div className="mobileAlertContainer">
            <div className="topAlertMobileContainer">
              <div className="mobileAlertText">
                <p className="alertText">
                  🚀 New Git UI is here!
                  <a 
                    href="https://app.appsmith.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="clickHereText"
                  >
                    {" "}Click to explore its features!
                  </a>
                </p>
              </div>
              <span onClick={handleClose}>
                <DeleteIcon className="alertDeleteIcon" />
              </span>
            </div>
          </div>
          <div className="firstAlertTopContiner">
            <div className="topAlertContainer">
              <span onClick={handleClose}>
                <DeleteIcon className="alertDeleteIcon" />
              </span>
              <p className="alertText">
                🚀 New Git UI is here!
                <a 
                  href="https://app.appsmith.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="clickHereText"
                >
                  {" "}Click to explore its features!
                </a>
              </p>
              <div></div>
            </div>
          </div>
        </>
      )}
    </BrowserOnly>
  );
};