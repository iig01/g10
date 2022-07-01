import { useState } from "react";

const Students = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("webbrain");

  return (
    <div>
      <h1>Hooks Component</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <hr />
      <h1>Title: {title}</h1>
      <input
        type="text"
        onChange={({ target: { value } }) => setTitle(value)}
      />
    </div>
  );
};

export default Students;
