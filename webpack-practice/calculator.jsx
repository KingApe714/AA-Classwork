import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // your code here
    this.state = {
        result: 0,
        num1: '',
        num2: ''
    }

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
  }

  // your code here

  setNum1(e) {
    e.preventDefault()

    this.setState({ num1: e.target.value })
  }

  setNum2(e) {
    e.preventDefault()

    this.setState({ num2: e.target.value })
  }

  render() {
    return (
      <div>
        <input  type="text"
                onChange={this.setNum1}
                value={this.state.num1} />

        <input  type="text"
                onChange={this.setNum2}
                value={this.state.num2} />
        <h1>{this.state.result}</h1> 
      </div>
    );
  }
}

export default Calculator;