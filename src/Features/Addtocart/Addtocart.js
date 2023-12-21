import React from 'react';
import './Addtocart.css';

import Emptycart from '../../assests/emptycart.gif'
import Footer from '../../Components/Footer/Footer';

function Addtocart(){
    return(
        <>
            <div className='addtocart-con'>
                <img src={Emptycart} alt='emptycart'/>
            </div>
            <Footer/>
        </>
    );
}

export default Addtocart;