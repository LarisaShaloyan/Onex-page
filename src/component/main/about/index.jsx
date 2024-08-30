import React from 'react';
import SectionHeader from "../../section/header";
import AboutShow from "./show";
import './index1.css'

function AboutIndex(props) {
    return (
        <section>
            <AboutShow/>
            <SectionHeader>
                <h2><span className={"green"}>ՀԵՏԵՎԵԼ</span> ԱՌԱՔԱՆՈՒՆ</h2>
                <p> Մուտքագրեք բեռնակրման համարը՝ առաքման ընթացքին հետևելու համար։</p>
                <input className="input" type={"text"} placeholder={"1zf81rf2344ff2A7"}></input>
                <button className="btn">Փնտրել <i className="fa-solid fa-magnifying-glass"></i></button>
            </SectionHeader>

        </section>
    );
}

export default AboutIndex;