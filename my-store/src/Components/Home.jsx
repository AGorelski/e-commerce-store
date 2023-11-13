import { Link } from "react-router-dom"

import { BsArrowRight } from 'react-icons/bs';
import { FaTruckMoving } from 'react-icons/fa';
import { FcMoneyTransfer } from 'react-icons/fc';
import { TbDiscount } from 'react-icons/tb';
import { FiPhoneCall } from 'react-icons/fi';

import './home.css'

export default function Home() {
    return(
        <div>
            <div className="top_banner">
                <div className="container">
                    <div className="detail">
                        <h2>The best Lutenica in the world, baby!</h2>
                        <Link to='/products' className="link">Namaji Now <BsArrowRight /></Link>
                    </div>
                    <div className="img_box">
                        <img src="/LutenicaHD.png" alt="lutenica" />
                    </div>
                </div>
            </div>
            <div className="product_type">
                <div className="container">
                    <div className="box">
                        <div className="img_box">
                            <img src="/breashnoHD.png" alt="brashno" />
                        </div>
                        <div className="detail">
                            <p>57 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="chokoHD.png" alt="choko" />
                        </div>
                        <div className="detail">
                            <p>23 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="MlqkoHD.png" alt="mlekce" />
                        </div>
                        <div className="detail">
                            <p>17 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="chokoHD.png" alt="shoko" />
                        </div>
                        <div className="detail">
                            <p>87 products</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="box">
                        <div className="icon">
                            <FaTruckMoving />
                        </div>
                        <div className="detail">
                            <h3>Free Shipping</h3>
                            <p>*Only for orders above 100BGN!</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FcMoneyTransfer />
                        </div>
                        <div className="detail">
                            <h3>Return</h3>
                            <p>*Guaranteed Refund</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <TbDiscount />
                        </div>
                        <div className="detail">
                            <h3>Discount for Members</h3>
                            <p>*On every order!</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FiPhoneCall />
                        </div>
                        <div className="detail">
                            <h3>Contact Customer Support</h3>
                            <p>+3598955555555</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}