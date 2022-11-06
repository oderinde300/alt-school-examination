import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authentication } from '../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AiOutlineGooglePlus } from 'react-icons/ai';
import Layout from './Layout';
import './Auth.css';

const Auth = () => {

    const navigate = useNavigate()

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then((res) => {
                alert(`You are signed in as ${res.user.displayName}`);
                return navigate('/home');

            }).catch(err => {
                alert(`Error: ${err.message}`);
                return navigate('/sign-in');
            })
    };

    return (
        <Layout>
            <div onClick={signInWithGoogle} className='Auth'>
                <div className='Auth-btn'>
                    <div className='Auth-icon' >
                        <AiOutlineGooglePlus size={25} />
                    </div> <span className='Auth-text'>SIGN IN WITH GOOGLE</span>
                </div>
            </div>
        </Layout>
    )
}

export default Auth;
