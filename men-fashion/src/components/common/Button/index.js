import React from "react";
import { PropTypes } from "prop-types";
import { Button } from "@material-ui/core";

ButtonText.propTypes = {
  type: PropTypes.string,
};

ButtonText.defaultProps = {
  type: "button",
};

function ButtonText({ text, type }) {
  return (
    <div>
      <Button type={type} size="small" color="primary">
        {text}
      </Button>
    </div>
  );
}

export default ButtonText;
