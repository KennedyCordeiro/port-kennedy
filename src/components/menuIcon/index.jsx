import React, { useState } from "react";

const ToggleIcon = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const toggleStyles = {
    position: "relative",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "10px",
    transitionDuration: ".5s",
    transform: isChecked ? "rotate(180deg)" : "none",
  };

  const barStyles = {
    width: "100%",
    height: "4px",
    backgroundColor: "rgb(92, 130, 255)",
    borderRadius: "4px",
  };

  const bar1Styles = {
    width: isChecked ? "100%" : "50%",
    transform: isChecked ? "rotate(45deg)" : "none",
    transitionDuration: ".5s",
  };

  const bar2Styles = {
    width: isChecked ? "0" : "75%",
    transitionDuration: isChecked ? ".1s" : ".8s",
  };

  const bar3Styles = {
    width: isChecked ? "100%" : "100%",
    transform: isChecked ? "rotate(-45deg)" : "none",
    transitionDuration: ".5s",
  };

  return (
    <div>
      <input />
      <label className="toggle" htmlFor="checkbox">
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
      </label>
    </div>
  );
};

export default ToggleIcon;
