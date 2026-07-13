import { useState } from "react";
import { IoIosColorPalette } from "react-icons/io";

function Form({ generateColor }) {
  const [color, setColor] = useState("");

  function handleSumbit(e) {
    e.preventDefault();
    generateColor(color);
  }
  return (
    <section className="container">
      <h1
        className="title"
        style={{
          borderBottom: `2px solid ${color}`,
          borderRadius: "8px",
        }}
      >
        <IoIosColorPalette style={{ color: color }} /> <span>HexMe</span>
      </h1>
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
