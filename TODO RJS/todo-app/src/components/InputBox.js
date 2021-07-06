import React from "react";
import "./InputBox.css";

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    console.log("here to submit!");
    this.props.onSubmit(this.state.value);
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <section className="App-header">
          <span>
            <input
              className="Add-search"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              className="Add-button"
              type="submit"
              value="Lets do it!"
              onClick={this.handleSubmit}
            />
          </span>
        </section>
      </div>
    );
  }
}

export default InputBox;
