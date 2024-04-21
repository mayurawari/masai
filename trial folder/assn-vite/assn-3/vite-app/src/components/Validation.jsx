import React, { useRef, useState } from 'react';

export const ValidationForm = () => {
  const inputRef = useRef(null);
  const [isValid, setIsValid] = useState(true);

  const handleValidation = () => {
    const inputValue = inputRef.current.value;
    if (inputValue.length < 5) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        onChange={handleValidation}
        style={{ borderColor: isValid ? 'green' : 'red' }}
      />
      {!isValid && <p>Please enter at least 5 characters.</p>}
    </div>
  );
};
