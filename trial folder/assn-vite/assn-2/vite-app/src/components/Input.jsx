import React, { useRef, useEffect } from "react";

export function Input() {
    const inputtext = useRef(null);

    useEffect(() => {
        inputtext.current.focus();
    }, []);

    return (
        <>
            <input type="text" ref={inputtext} />
        </>
    );
}