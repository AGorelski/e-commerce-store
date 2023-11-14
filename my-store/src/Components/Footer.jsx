import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { RiTiktokFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { FaLocationDot } from 'react-icons/fa6';

import './footer.css'

export default function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="about">
                    <div className="logo">
                        <img src="/logo.png" alt="logo" ></img>
                    </div>
                    <div className="detail">
                        <p>You can find Magazin Gorelski store at the following locations: </p>
                        <li><FaLocationDot /> Gorno Kraishte, Belitsa</li>
                        <li><FaLocationDot /> Dagonovo, Belitsa</li>
                        <li><FaLocationDot /> Yakoruda, Belitsa</li>
                        <div className="icon">
                            <li><AiFillFacebook /></li>
                            <li><AiFillInstagram /></li>
                            <li><RiTiktokFill /></li>
                            <li><FcGoogle /></li>
                        </div>
                    </div>
                </div>
                <div className='account'>
                    <h3>My Account</h3>
                    <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
                </div>
                <div className='page'>
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}