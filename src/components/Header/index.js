import React from 'react'
import Logo from "./../../assets/icons/Logo.svg";

import IconEarth from "./../../assets/icons/icon-park-outline_earth.svg"
import IconDown from "./../../assets/icons/bi_caret-down-fill.svg"
import styles from "./style.css"
import classNames from 'classnames/bind';
function Header() {
    const cx = classNames.bind(styles);
    return (
        <header className={cx('header')}>

            <div className='container'>
                <div className={cx('header_content')}>
                    <img className={cx('header_logo')} src={Logo} alt='logo' />
                    <div className={cx('header_list')}>
                        <div >
                            <img src={IconEarth} alt='logoEarth' />
                            <span>Tiếng Việt</span>
                            <img src={IconDown} alt='logoDow' />
                        </div>
                        <button className={cx('btn-header')}>Sign In</button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header