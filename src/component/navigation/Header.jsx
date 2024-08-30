import React from 'react';
import SectionHeader from "../section/header";
import Aliexpress from '../../component/assets/images/Aliexpress.svg'
import Barbasol from '../../component/assets/images/Barbasol.svg'
import Disney from '../../component/assets/images/Disneyshop.svg'
import Adidas from '../../component/assets/images/Adidas.svg'
import Amazon from '../../component/assets/images/Amazon.svg'
import Eatsy from '../../component/assets/images/Etsy.svg'
import Dealextreme from '../../component/assets/images/Dealextreme.svg'
import Abercrom from '../../component/assets/images/Abercrombieandfitch.svg'
import Armani from '../../component/assets/images/Armani.svg'
import Attica from '../../component/assets/images/Attica.svg'
import './Header.css'


function Header(props) {
    return (
        <div>

        <SectionHeader>
        <h2> ԼԱՎԱԳՈՒՅՆ ԽԱՆՈՒԹՆԵՐ</h2>
            <p>Միջազգային օնլայն խանութների 90%-ը առաքում չեն իրականացնում դեպի Հայաստան,
                սակայն ONEX-ի միջոցով կարող եք ստանալ Ձեր առաքանիները Հայաստանում ու Արցախում՝ արագ և ապահով</p>


            <div className={"xanut1"}>
                <div className={"xanut2"}>
                    <ul>
                        <li>
                            <img className="class" src={Attica} alt={""}/>
                        </li>
                    </ul>
                </div>

                <div className={"xanut2"}>
                    <ul>
                        <li>
                            <img className="class" src={Armani} alt={""}/>
                        </li>
                    </ul>
                </div>

                <div className={"xanut2"}>
                    <ul>
                        <li>
                            <img className="class" src={Abercrom} alt={""}/>
                        </li>
                    </ul>
                </div>

                <div className={"xanut2"}>
                    <ul>
                        <li>
                            <img className="class" src={Dealextreme} alt={""}/>
                        </li>
                    </ul>
                </div>

                <div className={"xanut2"}>
                    <ul>
                        <li>
                            <img className="class" src={Aliexpress} alt={""}/>
                        </li>
                    </ul>
                </div>
                <div className={"xanut2"}>
                    <ul>
                        <li>
                            <img className="class" src={Adidas} alt={""}/>
                        </li>
                    </ul>
                </div>
                <div className={"xanut2"}>
                    <ul>
                        <li>
                            <img className="class" src={Amazon} alt={""}/>
                        </li>
                    </ul>
                </div>
                <div className={"xanut2"}>
                    <ul>
                        <li>
                            <img className="class" src={Barbasol} alt={""}/>
                        </li>
                    </ul>
                </div>
                <div className={"xanut2"}>
                    <ul>
                        <li>
                            <img className="class" src={Disney} alt={""}/>
                        </li>
                    </ul>
                </div>
                <div className={"xanut2"}>
                    <ul>
                        <li>
                            <img className="class" src={Eatsy} alt={""}/>
                        </li>
                    </ul>
                </div>


            </div>

            {/*<table className="magazine">*/}
            {/*    <th>*/}
            {/*         Amazon*/}
            {/*    </th>*/}
            {/*<th> AliExpress</th>*/}

            {/*    <th>*/}
            {/*        Ebay*/}
            {/*    </th>*/}
{/*    <th> Carters</th>*/}
{/*    <th>  Forever 21</th>*/}
{/*    <th>  H&M</th>*/}
{/*    <th> Ralph Lauren</th>*/}
{/*    <th> Michael Kors</th>*/}
{/*    <th> TaoBao</th>*/}
{/*</table>*/}
<button className="xanut"> Բոլոր խանութները--></button>



   </SectionHeader>
            </div>
    )
}
export default Header;

