import React from "react";
import "./InputBox.css";

function DisplayList(List) {
  let displaylist = List.dList;
  let display = [];
  let i = 0;
  if (displaylist.length > 0) {
    for (let task of displaylist) {
      display.push(<div key={i}>{task}</div>);
      i++;
    }
  } else {
    display.push(<div>Please Add Notes!!</div>);
  }
  return display;
}

class ListBox extends React.Component {
  render() {
    return (
      <div className="App">
        <section>
          <DisplayList dList={this.props.doList}></DisplayList>
        </section>
      </div>
    );
  }
}

export default ListBox;
