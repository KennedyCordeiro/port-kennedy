import { useState } from "react";
import "./styles.css";

const InputStyled = ({ Placeholder }) => {
  return (
    <>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder={Placeholder}
          required=""
        />
        <label htmlFor={Placeholder} className="form__label">
          {Placeholder}
        </label>
      </div>
    </>
  );
};

export default InputStyled;
