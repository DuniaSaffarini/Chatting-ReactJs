import React, { useState } from 'react';
import "../style/Message.css";

export default function MessageArea() {
    const [message, setMessage] = useState('');
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setMessage(event.target.value);
        }
    }
    return (
        <div className="msg-container">
            <input type="textarea"
                name="textValue"
                onKeyDown={handleKeyDown}
                placeholder="Type something ..."
                style={{
                    height: "50px", width: "99%",
                    border: "0px"
                }}
            />
        </div>
    )
}
