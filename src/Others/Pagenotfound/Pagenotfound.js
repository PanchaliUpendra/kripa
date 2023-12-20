import React from 'react';
import './Pagenotfound.css';
import pagenotfoundimg from '../../assests/pagenotfound.png';
import { useNavigate } from 'react-router-dom';

function Pagenotfound(){
    const navigate = useNavigate();
    return(
        <>
            <div className='pnf-con'>
                <div className='page-not-found-inner'>
                    <img src={pagenotfoundimg} alt="pagenot-found" />
                    <button onClick={()=>navigate('/')} style={{cursor:'pointer'}}>Go To HomePage</button>
                </div>
            </div>
        </>
    );
}

export default Pagenotfound;