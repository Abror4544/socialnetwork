import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import logo from "../../assets/images/logo.png";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logo} />

            <div className={s.loginBlock}>
                {props.isAuth 
                ? <div>{props.login} <a onClick={props.logout}>Log out</a></div> 
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;