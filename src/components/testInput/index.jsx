import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material";
import { useState } from "react";

const CustomTextField = styled(TextField)({
  width: "100%",
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
    backgroundColor: "transparent",
    width: "100%",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white",
  },
});

const InputStyled = ({ width, type, label, placeholder, value, onChange }) => {
  return (
    <form style={{ marginTop: "20px", marginBottom: "10px", width: "70%   " }}>
      <CustomTextField
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variant="outlined"
        autoComplete="off"
        type={type}
      />
    </form>
  );
};

export default InputStyled;
