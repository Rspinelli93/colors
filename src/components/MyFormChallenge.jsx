import { useState, useRef, useEffect } from "react";
import BoxColor from "./BoxColor";

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyForm() {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input 
        id="color"
        type="text"
        placeholder="Type a color"
        onChange={(e) => setValue(e.target.value.toLowerCase())}
        value={value}
        ref={inputRef}
      />
      
      <div className="container">
        {colors.map((color) => (
          <BoxColor color={color} inputValue={value} />
        ))}
      </div>
    </>
  );
}

export default MyForm;
