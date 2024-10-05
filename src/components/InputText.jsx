import ReactDOM from "react-dom";
import { useState } from "react";
import AlertMessage from "./AlertMessage";

const InputText = () => {
  const [inputValue, setInputValue] = useState("");
  const [copyied, setCopyied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    setCopyied(true);
    navigator.clipboard.writeText(inputValue).then(() => {
      setTimeout(() => {
        setInputValue("");
        setCopyied(false);
      }, 2000);
    });
  };

  return ReactDOM.createPortal(
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleCopy}>Copy</button>

      {/* alert component */}
      <AlertMessage copyied={copyied} />
    </div>,
    document.querySelector("#sub")
  );
};

export default InputText;
