import React from 'react';
import SectionHeader from "../section/header";
import './main.css';
import rusExport from '../../../src/component/assets/images/export_rus.jpg'
import usaExport from '../../../src/component/assets/images/export_usa.jpg'
import docs from '../../../src/component/assets/images/docs.svg'
import service from '../../../src/component/assets/images/smart-service.svg'
function Main(){
    return(
        <div>
            <SectionHeader/>


            <h2>ԱՐՏԱՀԱՆՈՒՄ</h2>
            <p> Ուղարկե՛ք Ձեր փաստաթղթերը, ծանրոցները և բեռները
                ՀՀ-ից դեպի ԱՄՆ-ի և Ռուսաստանի ցանկացած հասցե</p>



            <div className={"items"}>
                <div className={"item"} >
                    <ul>
                        <li>
                            <img className="class" src={rusExport} alt={""}/>Արտահանում ՀՀ-ից դեպի Ռուսաստան
                        </li>
                    </ul>
                </div>


                <div className={"item"}>
                    <ul>
                        <li><img className="class" src={usaExport} alt={""}/>Արտահանում ՀՀ-ից դեպի ԱՄՆ</li>
                    </ul>
                </div>
                <div className={"item"}>
                    <ul>
                        <li><img className="class" src={docs}/>Փաստաթղթերի առաքում ՀՀ-ից դեպի աշխարհի ցանկացած կետ
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Main;