import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { IoLogInOutline } from 'react-icons/io5';
import { IoLogOutOutline } from 'react-icons/io5';

import { useAuth0 } from "@auth0/auth0-react";

import { Link } from 'react-router-dom';

import './navbar.css'

export default function Navbar() {

    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

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
                        {
                            isAuthenticated &&
                            (
                            <div className='account'>
                                <div className='user_icon'>
                                    <VscAccount />
                                </div>
                                <p>Hello, {user.name}!</p>
                            </div>
                            )
                        }
                       
                        <div className='second_icon'>
                            <Link to="/" className='link'><AiOutlineHeart /></Link>
                            <Link to="/cart" className='link'><BsFillBagCheckFill /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/products' className='link'>Products</Link>
                            </li>
                            <li>
                                <Link to='/about' className='link'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='auth'>
                        {
                            isAuthenticated ?
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><IoLogOutOutline /></button>
                            :
                            <button onClick={() => loginWithRedirect()}><IoLogInOutline /></button>
                        }
                        
                        {/* <p>Login</p> */}
                       
                        {/* <p>Logout</p> */}
                    </div>
                </div>
            </div>
            </>
    );
};