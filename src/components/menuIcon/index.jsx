import { useState } from "react";
import "./styles.css";

const ToggleIcon = ({ HandleMenu }) => {
  return (
    <div className="iconMenu">
      <input id="checkbox" type="checkbox" onClick={HandleMenu} />
      <label className="toggle" htmlFor="checkbox">
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
      </label>
    </div>
  );
};

export default ToggleIcon;
