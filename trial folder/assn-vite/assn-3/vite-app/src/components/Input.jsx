import React,{useRef} from 'react'

export const Input = () => {
  const inputRefs = useRef(null);
  
  const handleFocus = () => {
    inputRefs.current.focus();
  };

  return (
    <div>
      <input ref={inputRefs} onChange={handleFocus} placeholder="Field 1" /><br />
      <input ref={inputRefs} onChange={handleFocus} placeholder="Field 2" /><br />
      <input ref={inputRefs} onChange={handleFocus} placeholder="Field 3" /><br />
    </div>
  );
};

