import React from "react";
import { TextField } from "@mui/material";
const DefaultInput = (props) => {
  const { required, label, name, autoFocus, value, onChange, error, helperText, type } = props;
  return (
    <TextField
      margin="normal"
      required={required}
      fullWidth
      label={label}
      name={name}
      type={type}
      autoComplete="email"
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      {...props}
    />
  );
};

export default DefaultInput;
