import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;   // ignore empty input
    onAdd(text);                      // send the text up to App
    setText("");                      // clear the input box
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoForm;