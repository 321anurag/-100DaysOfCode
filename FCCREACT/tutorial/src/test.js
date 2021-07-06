import { useState } from "react";

export default function App() {
  const [smplText, setSmplText] = useState("<b>anurag</b>");
  return <div>{smplText}</div>;
}
