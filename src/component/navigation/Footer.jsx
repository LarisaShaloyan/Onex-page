import React from 'react';
import SectionHeader from "../section/header";
import './Footer.css'
function Footer(props) {
    return (
        <section>

            <SectionHeader>
                <h2> ԴԵՊԻ ՀՀ ԱՌԱՔՄԱՆ ԵՂԱՆԱԿՆԵՐ ԵՎ ՍԱԿԱԳՆԵՐ
                </h2>


                <table className="table">
                    <tr>
                        <th className="title">ԵՐԿԻՐ <i className="fa-solid fa-flag-usa"></i></th>
                        <th>ԱՌԱՔՄԱՆ ՏԵՎՈՂՈՒԹՅՈՒՆ <i className="fa-solid fa-clock"></i></th>
                        <th>ՄԻՆԻՄԱԼ <i className="fa-solid fa-minus"></i></th>
                        <th> ԾԱՎԱԼԱՅԻՆ ՔԱՇ <i className="fa-solid fa-ship"></i></th>
                        <th>ՍԱԿԱԳԻՆ (1ԿԳ) <i className="fa-solid fa-sack-dollar"></i></th>
                    </tr>
                    <tr>
                        <td> ԱՄՆ (օդային)</td>
                        <td> 5 - 9 աշխ. օր</td>
                        <td> X</td>
                        <td> x եթե առկա չէ գերծավալային քաշ</td>
                        <td>6.000դր</td>
                    </tr>
                    <tr>
                        <td>ԱՄՆ (ծովային)</td>
                        <td>3 - 4 ամիս</td>
                        <td>մինչև 10 կգ – 15.000 դր</td>
                        <td> Այո</td>
                        <td>1.500դր</td>
                    </tr>
                    <tr>
                        <td>Չինաստան (օդային)</td>
                        <td> 5 - 10 աշխ. օր</td>
                        <td> X</td>
                        <td> եթե առկա չէ գերծավալային քաշ</td>
                        <td>8.000դր</td>
                    </tr>
                    <tr>
                        <td>Մեծ Բրիտանիա</td>
                        <td> 5 - 10 աշխ. օր</td>
                        <td> X</td>
                        <td> եթե առկա չէ գերծավալային քաշ</td>
                        <td>6.000դր</td>
                    </tr>
                    <tr>
                        <td>Հունաստան</td>
                        <td> 6 - 11 աշխ. օր</td>
                        <td> X</td>
                        <td> եթե առկա չէ գերծավալային քաշ</td>
                        <td>3.000դր</td>
                    </tr>

                    <tr>
                        <td> Գերմանիա (օդային)</td>
                        <td> 5 - 10 աշխ. օր</td>
                        <td> X</td>
                        <td>Այո </td>
                        <td>7.000դր</td>
                    </tr>
                    <tr>
                        <td>Դուբայ</td>
                        <td> 5-10 աշխ. օր</td>
                        <td> X</td>
                        <td> եթե առկա չէ գերծավալային քաշ</td>
                        <td>5.000դր</td>
                    </tr>


                </table>


            </SectionHeader>
        </section>
    )
}

export default Footer;