import { toast } from "react-toastify";

function Color({ color }) {
  const { hex, weight, type } = color;
  async function saveToClipboard() {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`Color #${hex} copied!`, {
          style: {
            backgroundColor: `#${hex}`,
            color: `${type === "tint" && weight >= 90 ? "#222" : ""}`,
          },
        });
      } catch (err) {
        console.log(err);
        toast.error("Failed to copy to the clipboard!");
      }
    } else {
      toast.error("Clipboard blocked by the browser, sorry :(");
    }
  }
  return (
    <li
      className="color"
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
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
