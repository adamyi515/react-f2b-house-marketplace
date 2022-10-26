import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

// Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';


const SignIn = () => {
    // Local state
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const navigate = useNavigate();

    // Event Handlers /////////////////////////////////////////////////
    const handleChange = ev => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [ev.target.id]: ev.target.value
            }
        })
    }

    const handleSubmit = async ev => {
        ev.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            if(userCredential.user){
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            toast.error('Bad User Credentials')
        }
    }

    return(
        <>
            <div className='pageContainer'>
                <header>
                    <p className='pageHeader'>
                        Welcome back!
                    </p>
                </header>
                <form onSubmit={handleSubmit}>
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
                            onChange={handleChange}
                        />

                        <img src={visibilityIcon} alt='Show password' className='showPassword' 
                            onClick={() => setShowPassword((prevState) => !prevState )} />
                        
                        <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>
                        

                        <div className='signInBar'>
                            <p className='signInText'>Sign In</p>
                            <button className='signInButton'>
                                <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
                            </button>
                        </div>

                        <Link to='/sign-up' className='registerLink' >
                            Sign Up Instead
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignIn;