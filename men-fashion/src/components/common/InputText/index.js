import React from "react";
import PropTypes from "prop-types";
import { FormControl, TextField } from "@material-ui/core";

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

InputText.defaultProps = {
  label: "Label",
  type: "text",
};

function InputText({ label, name, value, onChangeField, type }) {
  return (
    <FormControl classes={{ root: "form__control" }}>
      <span className="form__label">{label}</span>
      <TextField
        name={name}
        value={value}
        onChange={onChangeField}
        type={type}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        className="form__input"
      ></TextField>
    </FormControl>
  );
}

export default InputText;
