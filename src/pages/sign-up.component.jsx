import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import {ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

// Firebase
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase.config';

const SignUp = () => {
    // Local state
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = formData;
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
            // Create a user in Firebase Authentication system.
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update the newly created user in Firebase Authentication display name.
            updateProfile(auth.currentUser, {
                displayName: name
            });

            // // Add the user in our Firebase Firestore DB.
            const formDataCopy = {...formData};
            delete formDataCopy.password;
            formDataCopy.timeStamp = serverTimestamp();

            // // Making a query call to Firebase Firestore.
            await setDoc(doc(db, 'users', user.uid), formDataCopy);

            navigate('/');

        } catch (error) {
            toast.error('Something went wrong with Registraion.');
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