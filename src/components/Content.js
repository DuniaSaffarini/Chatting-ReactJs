import React from 'react'
import "../style/content.css";

export default function Content(props) {
    const { msgText, type } = props;
    return (
        <div className={type === "sender" ? 'senderBackground' : 'receiverBackground'}>
            {props.msgText}
        </div>
    )
}
