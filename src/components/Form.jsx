import { useState } from "react";

function Form() {
  const [color, setColor] = useState("");

  function handleSumbit(e) {
    e.preventDefault();
  }
  return (
    <section className="container">
      <h4>Shade generator</h4>
      <form>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
      </form>
    </section>
  );
}

export default Form;
