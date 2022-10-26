import React, { useEffect, useState } from 'react';

// Firebase
import { auth } from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

export const useAuthStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setIsLoggedIn(true);
            }
            setLoading(false);
        })
    });

    return { isLoggedIn, loading };
}