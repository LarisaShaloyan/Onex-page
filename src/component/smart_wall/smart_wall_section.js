import React from 'react';
import './smart_wall.css'
function SmartWallSection({src}) {
    return (
        <div>
            <iframe  height="290" src={src} title="ONEX SMART WALL"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
}

export default SmartWallSection;