import { useState } from "react";

function Form() {
  const [color, setColor] = useState("");

  function handleSumbit(e) {
    e.preventDefault();
  }
  return (
    <section className="container">
      <h1>HexMe</h1>
      <form className="color-form" onSubmit={handleSumbit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#37d7d5"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Generate
        </button>
      </form>
    </section>
  );
}

export default Form;
