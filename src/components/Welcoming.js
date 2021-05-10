import React, { useContext } from 'react'
import ImageProfile from './ImageProfile'
import "../style/Welcoming.css";
import { UserInfo } from "../App"

export default function Welcoming(props) {
    const userInfo = useContext(UserInfo);

    return (
        <div className="container">
            <span className="msg">Hi {userInfo.name}!</span>
            <span> <ImageProfile size="profile" />
            </span>
        </div>
    )
}
