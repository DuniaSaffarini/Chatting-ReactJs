import React from 'react'
import "../style/img.css";
export default function ImageProfile({ size }) {
    return (
        <div>
            {size === "sidebar" &&
                <div className="sidebarIcon" />
            }
            {size === "profile" &&
                <div className="profileIcon" />
            }
        </div>
    )
}
