import React from "react";
import Button from "./Button.jsx";

class ButtonClass extends React.Component {
  render() {
    return (
      <Button
        variant="primary"
        size="sm"
        type="button"
        handleClick={() => console.log("Click happened")}
        text="Click Me"
      />
    );
  }
}

export default ButtonClass;
