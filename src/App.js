import "./App.css";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App" style={{ background: "gray" }}>
      <h1>Products</h1>
      <div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
