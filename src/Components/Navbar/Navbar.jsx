import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo' />
                <p>Rebuy</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu("shop")}>
                    <Link style={{ textDecoration: 'none' }} to='/shop'>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("bicycle")}>
                    <Link style={{ textDecoration: 'none' }} to='/bicycle'>Bicycle</Link>
                    {menu === "bicycle" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("mattresses")}>
                    <Link style={{ textDecoration: 'none' }} to='/mattresses'>Mattresses</Link>
                    {menu === "mattresses" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("electronics")}>
                    <Link style={{ textDecoration: 'none' }} to='/electronics'>Electronics</Link>
                    {menu === "electronics" ? <hr /> : <></>}
                </li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt='cart' />
                </Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
