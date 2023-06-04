import React from 'react'
import Logo from "../../../../assets/icons/Logo.svg";


import styles from "./style.css"
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
function Header() {
    const cx = classNames.bind(styles);
    return (
        <header className={cx('header')}>

            <div className='container'>
                <div className={cx('header_content')}>
                    <Link to={`/`}>
                        <img className={cx('header_logo')} src={Logo} alt='logo' />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header