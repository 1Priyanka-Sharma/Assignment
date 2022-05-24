import React from "react";
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button
      className={`btn btn-${props.variant} btn-${props.size}`}
      type={props.type}
      onClick={() => setTimeout(props.handleClick, 5000)}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  variant: "primary",
  size: "sm",
  text: "I am a button",
};

export default Button;
