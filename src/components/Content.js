import React from 'react'
import "../style/content.css";

export default function Content(props) {
    return (
        <div className={props.type === "sender" ? 'senderBackground' : 'receiverBackground'}>

            {props.MsgText}

        </div>
    )
}
