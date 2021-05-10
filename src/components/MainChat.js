import React from 'react'
import Content from './Content'
import "../style/mainChat.css";
import Sidebar from './Sidebar';

export default function MainChat(props) {
    return (
        <div>
            <div>
                <div className={props.active ? "mainChat-container" : "mainChat-container-inactive"}>
                    <Content MsgText="Hi" type="senderBackground" />
                    <Content MsgText="hello" type="receiverBackground" />

                </div>
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
    )
}
