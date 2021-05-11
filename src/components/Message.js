import React from 'react';
import "../style/Message.css";

export default function MessageArea(props) {
    const { message, setMessage, handleKeyDown } = props;

    return (
        <div className="msg-container">
            <input className="msgText"
                type="textarea"
                name="textValue"
                onKeyDown={handleKeyDown}
                placeholder="Type something ..."
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
        </div>
    )
}
