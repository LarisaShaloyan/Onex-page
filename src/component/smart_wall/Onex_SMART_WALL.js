import React from 'react';
import './smart_wall.css'
import SectionHeader from "../section/header";
function OnexSmartWall({children}) {
    return (

        <div className={"OnexSmartWall"}>

            {children}
        </div>

    );
}

export default OnexSmartWall;