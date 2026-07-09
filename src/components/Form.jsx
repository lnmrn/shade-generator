import { useState } from "react";

function Form() {
  const [color, setColor] = useState("");

  function handleSumbit(e) {
    e.preventDefault();
  }
  return (
    <section className="container">
      <h4>Tints & Shades</h4>
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
          placeholder="#f15025"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Generate
        </button>
      </form>
    </section>
  );
}

export default Form;
