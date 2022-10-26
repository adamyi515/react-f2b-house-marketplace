import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

// Firebase
import { auth, db } from '../firebase.config';
import { updateProfile } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';


const Profile = () => {
    // Local state
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    });
    const [changeDetails, setChangeDetails] = useState(false);

    const { name, email } = formData;
    const navigate = useNavigate();


    // EVENT HANDLERS /////////////////////////////////////////////////
    const onLogout = () => {
        auth.signOut();
        navigate('/');
    }

    const handleSubmit = async ev => {
        console.log('Submitted!');
        try {
            if(auth.currentUser.displayName !== name){
                // Update display name in Authentication.
                await updateProfile(auth.currentUser, {
                    displayName: name
                });

                // Update email & name in Firestore.
                const userRef = doc(db, 'users', auth.currentUser.uid);
                await updateDoc(userRef, {
                    name
                });
            }
        } catch (error) {
            console.log(error);
            toast.error('Could not update profile details.')
        }
    }

    const handleChange = ev => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [ev.target.id]: ev.target.value 
            }
        })
    }

    return(
        <div className='profile'>
            <header className='profileHeader'>
                <p className='pageHeader'>My Profile</p>
                <button type='button' className='logOut' onClick={onLogout} >Logout</button>
            </header>

            <main>
                <div className="profileDetailsHeader">
                    <p className='profileDetailsText'>
                        Personal Details
                    </p>
                    <p className='changePersonalDetails' onClick={() => {
                        changeDetails && handleSubmit();
                        setChangeDetails((prevState) => !prevState);
                    }}>
                        {changeDetails ? 'done' : 'change'}
                    </p>
                </div>

                <div className='profileCard'>
                    <form>
                        <input 
                            type='text'
                            id='name'
                            className={!changeDetails ? 'profileName' : 'profileNameActive'}
                            disabled={!changeDetails}
                            value={name}
                            onChange={handleChange}
                        />
                        <input 
                            type='text'
                            id='email'
                            className={!changeDetails ? 'profileEmail' : 'profileEmailActive'}
                            disabled={!changeDetails}
                            value={email}
                            onChange={handleChange}
                        />
                    </form>
                </div>

            </main>
        </div>
    )
}

export default Profile;