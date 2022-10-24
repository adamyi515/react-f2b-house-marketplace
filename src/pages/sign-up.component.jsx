import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

const SignUp = () => {
    // Local state
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = formData;

    // Event Handlers /////////////////////////////////////////////////
    const handleChange = ev => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [ev.target.id]: ev.target.value
            }
        })
    }


    return(
        <>
            <div className='pageContainer'>
                <header>
                    <p className='pageHeader'>
                        Welcome back!
                    </p>
                </header>
                <form>
                    <input 
                        type='text'
                        id='name'
                        className='nameInput'
                        placeholder='Name'
                        value={name}
                        onChange={handleChange}
                    />
                    <input 
                        type='email'
                        id='email'
                        className='emailInput'
                        placeholder='Email'
                        value={email}
                        onChange={handleChange}
                    />

                    <div className='passwordInputDiv'>
                        <input 
                            type={showPassword ? 'text' : 'password'}
                            className='passwordInput'
                            placeholder='Password'
                            id='password'
                            value={password}
                            onChange={handleChange}
                        />

                        <img src={visibilityIcon} alt='Show password' className='showPassword' 
                            onClick={() => setShowPassword((prevState) => !prevState )} />
                        
                        <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>
                        

                        <div className='signUpBar'>
                            <p className='signUpText'>Sign Up</p>
                            <button className='signUpButton'>
                                <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
                            </button>
                        </div>

                        <Link to='/sign-in' className='registerLink' >
                            Sign In Instead
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp;