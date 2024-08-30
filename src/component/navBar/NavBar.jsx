import React from 'react';
import './navbar.css'
import Onex_logo from '../../component/assets/images/onex-logo.svg'
function NavBar(props) {
    return (


        <div className="navbar" >
            <ul className={"right"}>
                <li><img className="logo" src={Onex_logo} alt={""} /> </li>
            </ul>

            <ul className="navbar-nav">

                <li><a href="/home" className="text-blue-500 hover:underline">Ներմուծում</a></li>
                <li><a href="/about" className="text-blue-500 hover:underline">Արտահանում</a></li>
                <li><a href="/services" className="text-blue-500 hover:underline">Կորպորատիվ</a></li>
                <li><a href="/contact" className="text-blue-500 hover:underline">Կոնտակտ</a></li>


            </ul>
        </div>


    );
}

export default NavBar;