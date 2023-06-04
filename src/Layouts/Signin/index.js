import React, { useState } from 'react'
import "./style.css"
import Header from './components/Header'
import Input from '../../components/Input'
export default function Signin() {
    const [username, setUsername] = useState('')
    const [active, setActive] = useState(false)
    return (
        <div className='form'>
            <Header />
            <div className='signin'>
                <div className='container h-100 '>
                    <div className='signin_content h-100 '>
                        <form className='form_signin h-100 '>
                            <Input
                                onClick={() => setActive(active ? false : true)}
                                styleLabel={`${active ? "label-focus" : ""}`}
                                name={`usename`}
                                type={`text`}
                                label={`Email hoặc số điện thoại`}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

