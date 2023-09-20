import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material";
import "./styles.css";

const CustomTextField = styled(TextField)(({ overrated }) => ({
  width: "100%",
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
    backgroundColor: "transparent",
    width: "100%",
    height: overrated ? "100px" : undefined,
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white",
    //borderColor: "#50367e",
  },
}));

const InputStyled = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  overrated,
}) => {
  return (
    <form className={overrated ? "my-inputOverrated" : "my-input"}>
      <CustomTextField
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variant="outlined"
        autoComplete="off"
        type={type}
        overrated={overrated}
        sx={{ height: "70px" }}
      />
    </form>
  );
};

export default InputStyled;
