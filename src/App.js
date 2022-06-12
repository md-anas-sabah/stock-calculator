import { useState } from "react";
import "./App.css";

function App() {
  const [prev, setPrev] = useState("");
  const [quantity, setQuantity] = useState("");
  const [current, setCurrent] = useState("");
  const [text, setText] = useState("");

  const clickHandler = () => {
    if (prev <= 0 || quantity <= 0 || current <= 0) {
      setText("Provided inputs should be grater than 0");
    } else {
      const then = Number(prev) * Number(quantity);
      const now = Number(current) * Number(quantity);
      let percent = (((now - then) / then) * 100).toFixed(2);

      if (percent === 0) {
        setText(`Percentage Gain: ${percent}% and Total Profit: ${now - then}`);
      } else if (percent > 0) {
        setText(
          `Percentage Gain: ${percent}% and Total Profit: ${now - then} 🤑🥳`
        );
      } else {
        setText(
          `Percentage Loss: ${Math.abs(percent)}% and Total Loss: ₹${Math.abs(
            now - then
          )} 😞😞`
        );
      }
    }
  };

  return (
    <div className="app">
      <header>
        <h1>🤑Profit / Loss😓</h1>
      </header>
      <div className="input_container">
        <div className="number flex">
          <h4>Price per stock at the time of purchase: </h4>
          <input
            type="number"
            value={prev}
            onChange={(e) => setPrev(e.target.value)}
          />
        </div>
        <div className="number flex">
          <h4>Total number of stock purchased: </h4>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="number flex">
          <h4>Current Price: </h4>
          <input
            type="number"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
          />
        </div>
      </div>
      <button onClick={clickHandler}>Check Status</button>
      <p className="result">{text}</p>
    </div>
  );
}

export default App;
