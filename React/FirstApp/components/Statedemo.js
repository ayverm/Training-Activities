import { useState } from "react";

function Statedemo() {
  const [name, setName] = useState("mindsprint");
  const changeName = () => {
    setName("Hello World");
  };
  return (
    <div>
      <h3>Name : {name}</h3>
      <button onClick={changeName}>Click Me</button>
    </div>
  );
}

export default Statedemo;
