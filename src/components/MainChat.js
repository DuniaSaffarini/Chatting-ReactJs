import React from 'react'
import Content from './Content'
import "../style/mainChat.css";
import Sidebar from './Sidebar';
import Message from './Message';
import { useState, useEffect } from 'react';

const randomReplies = [
    'Hi',
    'How r you?',
    'I am good, and you'
];

const initMessages = [
    { msgText: 'hi-sender', type: 'sender' },
    { msgText: 'hi-reciever', type: 'receiver' }
];

export default function MainChat(props) {
    const [messages, setMessages] = useState(initMessages);
    const [message, setMessage] = useState('');

    const appendMsg = (msg) => {
        const newMsgs = [...messages, msg];
        setMessages(newMsgs);
    }

    useEffect(() => {
        if (messages.length % 2 !== 0) {
            setTimeout(() => {
                const randomReply = randomReplies[Math.floor(Math.random() * randomReplies.length)];

                appendMsg({ msgText: randomReply, type: 'receiver' });
            }, 3000);
        }
    }, [messages.length]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            appendMsg({ msgText: message, type: 'sender' })
            setMessage('');
        }
    }

    return (
        <div className="mainChat">
            <div className={"mainChat-container"}>
                <div className="mainChat-msgs">
                    {messages.map(({ msgText, type }, i) => {
                        return <Content key={msgText + type + i} msgText={msgText} type={type} />
                    })}
                </div>
                <Sidebar />
            </div>
            <Message
                handleKeyDown={handleKeyDown}
                message={message}
                setMessage={setMessage}
            />
        </div>
    )
}
