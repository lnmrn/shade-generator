function Color({ color }) {
  const { hex, weight, type } = color;
  console.log(color);
  return (
    <li className="color" style={{ background: `#${hex}` }}>
      <p className={`${type === "shade" ? "color-light" : "color-dark"}`}>
        {weight}%
      </p>
      <p className={`${type === "shade" ? "color-light" : "color-dark"}`}>
        #{hex}
      </p>
    </li>
  );
}

export default Color;
