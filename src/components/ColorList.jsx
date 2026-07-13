import Color from "./Color";

function ColorList({ colors }) {
  return (
    <ul className="colors">
      {colors.map((color) => (
        <Color key={crypto.randomUUID()} color={color} />
      ))}
    </ul>
  );
}

export default ColorList;
