import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          value={name}
        ></input>
      </form>
    </div>
  );
}
