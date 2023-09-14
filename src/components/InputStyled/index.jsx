import { useState } from "react";

import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

const InputStyled = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  errorMessage,
  styledInput,
}) => {
  const ValidationTextField = styled(TextField)({
    "& input:valid + fieldset": {
      borderColor: "#E0E3E7",
      borderWidth: 1,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 1,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 4,
      padding: "4px !important", // override inline-style
    },
  });
  const getInput = () => {
    if (styledInput) {
      return (
        <>
          <ValidationTextField
            label={label}
            required
            type={type}
            placeholder={placeholder}
            variant="outlined"
            id="validation-outlined-input"
            value={value}
            onChange={onChange}
          />
        </>
      );
    } else {
      return <TextField></TextField>;
    }
  };

  return getInput();
};
export default InputStyled;
