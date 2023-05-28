import React, { useState } from 'react'
import styles from "./style.css"
import classNames from 'classnames/bind';
function Banner() {
    const cx = classNames.bind(styles);
    const [email, setEmail] = useState('')
    return (
        <div className={cx('banner')}>
            <div className="container">
                <div className={cx("banner_content")}>
                    <h1 className={cx('banner_title')}>
                        Unlimited movies, TV shows and more.
                    </h1>
                    <p className={cx('banner_des')}>Watch anywhere. Cancel anytime.</p>
                    <div className={cx('banner_form-wrapper')}>
                        <h3 className={cx("banner_form-title")}>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className={cx('banner_form')}>
                            <input className={cx('banner_form-input')} placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button className={cx('btn-header btn-form')}>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner