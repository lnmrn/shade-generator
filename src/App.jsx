import { useState } from "react";
import ColorList from "./components/ColorList";
import Form from "./components/Form";
import Values from "values.js";
import { Bounce, toast, ToastContainer } from "react-toastify";

function App() {
  const [colors, setColors] = useState(new Values("#37d7d5").all(10));

  function generateColor(color) {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (err) {
      console.log(err.message);
      toast.error("Not a color, please try again!");
    }
  }

  return (
    <main>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
        closeOnClick={true}
        transition={Bounce}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
      <Form generateColor={generateColor} />
      <ColorList colors={colors} />
    </main>
  );
}

export default App;
