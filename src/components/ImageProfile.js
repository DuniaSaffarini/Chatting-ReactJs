import React from 'react'
import "../style/img.css";
export default function ImageProfile(props) {
    return (
        <div>
            {props.size === "sidebar" &&
                <div className="sidebarIcon"></div>
            }
             {props.size === "profile" &&
                <div className="profileIcon"></div>
            }
        </div>
    )
}
