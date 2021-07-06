import React from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import ListBox from "./components/ListBox";

class App extends React.Component {
  state = { doAdd: [] };

  handleDoList = (doListValue) => {
    let A = this.state.doAdd;
    A.push(doListValue);
    this.setState({ doAdd: A });
    console.log(this.state.doAdd);
  };

  render() {
    return (
      <div>
        <InputBox onSubmit={this.handleDoList}></InputBox>
        {/* <span>{this.state.doAdd}</span> */}
        <ListBox doList={this.state.doAdd}></ListBox>
      </div>
    );
  }
}

export default App;
