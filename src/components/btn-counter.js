import * as React from "react"

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup"; 


class BtnCounter extends React.Component {
  state = { counter: 0 };

  handleIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

//   handleDecrement = () => {
//     this.setState(state => ({ counter: state.counter - 1 }));
//   };
  render() {
    const displayCounter = this.state.counter > 0;

    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={this.handleIncrement}>Check In</Button>
        {displayCounter && <Button disabled>{this.state.counter}
        </Button>}
        {/* {displayCounter && <Button onClick={this.handleDecrement}>-
        </Button>} */}
      </ButtonGroup>
    );
  }
}

export default BtnCounter;