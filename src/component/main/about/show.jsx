import React from 'react';
import photo_camera from '../../../component/assets/images/logo.svg'
import photos_inside from '../../../component/assets/images/photos-inside.svg'
import change_receiver from '../../../component/assets/images/change-receiver.svg'
import repack_camera from '../../../component/assets/images/repackaging.svg'
import stop_photo from '../../../component/assets/images/stop.svg'

import './show.css'
import service from "../../assets/images/smart-service.svg";
const AboutShow=()=> {

    return (


        <div className={"grid"}>
                <img className={"service"} src={service} alt=""/>

            <ul className={"photo"}>
                <li><img className="name" src={photo_camera} alt={""}/>Լուսանկարել դրսից</li>
                <li><img className="name" src={change_receiver} alt={""}/>Փոխել ստացողին</li>
                <li><img className="name" src={repack_camera} alt={""}/> Հավելյալ փաթեթավորում</li>
                <li><img className="name" src={stop_photo} alt={""}/> Կանգնեցնել</li>
                <li><img className="name" src={photos_inside} alt={""}/>Լուսանկարել ներսից</li>
            </ul>
            <button className="btn1">Ավելին--></button>
        </div>
    );
}

export default AboutShow;