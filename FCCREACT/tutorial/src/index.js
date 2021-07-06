import React from "react";
import ReactDom from "react-dom";
import App from "./test";

// stateless functional component
// always return JSX

function Greeting() {
  //traditional js function syntax
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Anurag Kumar</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

// const Greeting = () =>{
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world!!')
//   );
// }

ReactDom.render(<App />, document.getElementById("root"));
// must have the closing tag, if there is no closing tag.
//In render function we pass two things whatever we are going to render and where are we going to render.
