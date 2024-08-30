import React from 'react';
import SectionHeader from "../section/header";
import './index.css'
function SectionNewsIndex(props) {
    return (
        <div>



            <SectionHeader>
                <h2>ԱՄԵՆԱԹԱՐՄ ՆՅՈՒԹԵՐԸ ՄԵՐ<a href={"https://google.com"} className={"green"}> ԲԼՈԳԻՑ</a></h2>
                <p> Մուտքագրեք բեռնակրման համարը՝ առաքման ընթացքին հետևելու համար։</p>
            </SectionHeader>
<input className="input" type={"text"} placeholder={"search...."}></input>

                <button className="btn">Փնտրել <i className="fa-solid fa-magnifying-glass"></i></button>

        </div>
    );
}

export default SectionNewsIndex;