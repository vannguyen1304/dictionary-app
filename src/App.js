import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <Header setInputValue={setInputValue} inputValue={inputValue} />
      <Result inputValue={inputValue} />
    </div>
  );
}

export default App;
