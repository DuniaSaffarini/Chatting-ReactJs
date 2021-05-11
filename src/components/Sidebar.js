import React, { useState, useContext } from 'react';
import ImageProfile from './ImageProfile'
import { UserInfo } from "../App"
import { AiOutlineArrowLeft } from "react-icons/ai";

import { AiOutlineArrowRight } from "react-icons/ai";

import "../style/Sidebar.css";

export default function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const userInfo = useContext(UserInfo);

    return (
        <div className={`sideBar-container ${sidebar ? 'active' : ''}`}>
            {!sidebar &&
                <div className='menu-bars'>
                    <AiOutlineArrowLeft onClick={showSidebar} />
                </div>
            }
            {sidebar &&
                <div className='menu-bars'>
                    <AiOutlineArrowRight onClick={showSidebar} />
                </div>
            }
            <div className={sidebar ? 'side-menu active' : 'side-menu'}>
                <div className="name">
                    <span className="name-padding">
                        Name
                          </span>
                    <span>
                        {userInfo.name}
                    </span>
                </div>
                <div className="age">
                    <span className="age-padding">
                        Age:
                          </span>
                    <span>
                        {userInfo.age}
                    </span>
                </div>
                <ImageProfile size="sidebar" />
            </div>

        </div>
    )
}
