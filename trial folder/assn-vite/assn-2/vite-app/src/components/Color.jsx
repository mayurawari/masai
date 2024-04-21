import React, { useState, useEffect } from 'react'

export const Color = () => {

    const [color, setColor] = useState(true);


    const flag = () => {
        setColor(!color);
    }

    return (
        <div style={{ width: "400px", height: "400px", background: color ? "red" : "blue", border: "1px solid white" }} onClick={flag}>Color</div>
    )
}
