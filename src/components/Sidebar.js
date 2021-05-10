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
        <div className="sideBar-container">
            <div>

                <div className='navbar'>
                    {sidebar &&
                        <div className='menu-bars'>
                            <AiOutlineArrowLeft onClick={showSidebar} />
                        </div>
                    }
                     {!sidebar &&
                        <div className='menu-bars'>
                            <AiOutlineArrowRight onClick={showSidebar} />
                        </div>
                    }
                </div>
                <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <div style={{ marginTop: "40px", marginLeft: "20px" }}>

                        <span style={{ paddingRight: "15px" }}>
                            Name
                          </span>
                        <span>
                            {userInfo.name}
                        </span>
                    </div>
                    <div style={{ marginTop: "10px", marginLeft: "20px" }}>
                        <span style={{ paddingRight: "15px" }}>
                            Age:
                          </span>
                        <span>
                            {userInfo.age}
                        </span>
                    </div>
                    <div>
                        <ImageProfile size="sidebar" />
                    </div>
                </div>
            </div>
        </div>
    )
}
