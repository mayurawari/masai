import React, { useRef,useState} from 'react';

export const Uncontrolled = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = () => {
    const value = inputRef.current.value;
    setInputValue(value);
    console.log(value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleInputChange} />
      <p>Current value: {inputValue}</p>
    </div>
  );
};
