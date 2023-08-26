import { Nike } from "./page";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nike />
    </BrowserRouter>
  );
}

export default App;
