import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Profit/Loss</h1>
      </header>
      <div className="input_container">
        <div className="number flex">
          <h4>Price per stock at the time of purchase: </h4>
          <input type="number" />
        </div>
        <div className="number flex">
          <h4>Total number of stock purchased: </h4>
          <input type="number" />
        </div>
        <div className="number flex">
          
        </div>
      </div>
    </div>
  );
}

export default App;
