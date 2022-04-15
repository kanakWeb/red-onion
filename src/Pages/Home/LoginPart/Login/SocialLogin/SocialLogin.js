import React from 'react';
import auth from '../../../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    

    return (
        <div className='mx-auto w-50'>
           <button onClick={()=>signInWithGoogle()} className='btn btn-primary px-3'>Google login</button>
           <button className='btn btn-primary mx-2'>Github Login</button>
        </div>
    );
};

export default SocialLogin;