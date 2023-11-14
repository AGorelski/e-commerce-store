import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';

import './navbar.css'

export default function Navbar() {
    return(
        <><div className='free'>
            <div className='icon'>
                <FaTruckMoving />
            </div>
            <p>FREE Shipping for orders above 100BGN</p>
        </div><div className='main_header'>
                <div className='container'>
                    <div className='logo'>
                        <img src="/logo.png" alt='logo'></img>
                    </div>
                    <div className='search_box'>
                        <input type="text" value='' placeholder='Search the product you need' autoComplete='off' />
                        <button>Search</button>
                    </div>
                    <div className='icon'>
                        <div className='account'>
                            <div className='user_icon'>
                            <VscAccount />
                            </div>
                            <p>Hello, Baaka!</p>
                        </div>
                        <div className='second_icon'>
                            <p><AiOutlineHeart /></p>
                            <p><BsFillBagCheckFill /></p>
                        </div>
                    </div>
                </div>
            </div></>
    );
};