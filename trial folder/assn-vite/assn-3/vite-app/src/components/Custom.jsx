import React, { useRef } from 'react';

export const CustomForm = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const handleSubmit = () => {
    const formData = {
      field1: inputRef1.current.value,
      field2: inputRef2.current.value,
    };
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <input ref={inputRef1} placeholder="Field 1" />
      <input ref={inputRef2} placeholder="Field 2" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
