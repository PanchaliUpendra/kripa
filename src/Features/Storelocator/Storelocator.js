import React, { useEffect } from 'react';
import './Storelocator.css'
import Footer from '../../Components/Footer/Footer';

function Storelocator(){
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'instant'})
    },[]);
    return(
        <>
            <div className='store-locator'>
                <div className='store-locator-header'>
                    <h1>Store Locator</h1>
                </div>
            </div>
            <div className='shop-footer-below'>
            <Footer/>
            </div>
            <div className="home-copy-right">
                <p>©</p>
                <p>2023 Kripa , Inc.</p>
        </div>
        </>
    );
}

export default Storelocator;