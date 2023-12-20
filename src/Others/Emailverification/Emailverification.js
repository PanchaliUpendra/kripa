import React from 'react';
import './Emailverification.css';
import verification from '../../assests/verification.gif';
import { useNavigate } from 'react-router-dom';

function Emailverification(){
    
    const navigate = useNavigate();
    return(
        <>
        <div className='email-verify-con'>
            <div className='email-verify-con-inner'>
                <img src={verification} alt='user-verfifcation logo' className='email-verify-con-div-img'/>
                <div className='verification-para-goes-here'>
                    <p>An email verification has been sent to your email address. Please check your email and 
                        follow the instructions to verify your account.</p>
                </div>
                <div>
                    <button></button>
                </div>
                <div className='page-not-found-inner'>
                    <button onClick={()=>navigate('/')} style={{cursor:'pointer'}}>Go To HomePage</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Emailverification;