import React, { useState } from 'react'
import "./style.css"
import Header from './components/Header'
import Input from '../../components/Input'
export default function Signin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='form'>
            <Header />
            <div className='signin'>
                <div className='container h-100 '>
                    <div className='signin_content h-100 '>
                        <form className='form_signin h-100 '>
                            <h2 className='form_title'>Sign In</h2>
                            <div className='form_wrapper'>
                                <Input
                                    onClick={null}

                                    name={`usename`}
                                    type={`text`}
                                    label={`Email hoặc số điện thoại`}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <Input
                                    onClick={null}
                                    className='mg-input'
                                    name={`password`}
                                    type={`password`}
                                    label={`Nhập mật khẩu của bạn`}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button className='form_submit'>sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

