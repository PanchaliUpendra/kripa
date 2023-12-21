import React from 'react';
import './Wishlist.css';
import emptylist from '../../assests/emptylist.gif';
import Footer from '../../Components/Footer/Footer';

function Wishlist(){
    return(
        <>
            <div className='wishlist-con'>
                <img src={emptylist} alt='emptylist'/>
                <p>"Your wishlist is currently empty. Start adding items to create your personalized collection of must-haves!"</p>
            </div>
            <Footer/>
        </>
    );
}

export default Wishlist;