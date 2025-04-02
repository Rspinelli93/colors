const BoxColor = ({ color, inputValue }) => {
  return (
    <div 
      key={color} 
      className="box"
      style={{ 
        backgroundColor: inputValue === color ? color : "transparent",
        border: `2px solid ${color}`,
        color: inputValue === color ? "black" : color,
      }}
      >
      {inputValue === color ? `Im the color ${color}` : `Im not the color ${inputValue}`}
    </div>
  );
};

export default BoxColor;  
