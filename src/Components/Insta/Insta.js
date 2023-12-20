import React from 'react';
import './Insta.css';
import insta1 from '../../assests/insta1.PNG';
import insta2 from '../../assests/insta2.PNG';
import insta3 from '../../assests/insta3.PNG';
import insta4 from '../../assests/insta4.PNG';
import insta5 from '../../assests/insta5.PNG';

function Insta(){
    return(
        <>
            <div className='insta-con'>
                <h1>Follow products and discounts on Instagram</h1>
                <p>Stay updated on the latest products and exclusive discounts by 
                    following us on Instagram. Join our community for  more exciting content!</p>
                <div className='insta-first-div'>
                    <div><img src={insta1} alt="insta pics"/></div>
                    <div><img src={insta2} alt="insta pics"/></div>
                    <div><img src={insta3} alt="insta pics"/></div>
                    <div><img src={insta4} alt="insta pics"/></div>
                    <div><img src={insta5} alt="insta pics"/></div>
                </div>
                <div className='insta-second-div'>
                    <h1>For More Updates</h1>
                    <div>
                        <input type='text' placeholder='Enter Email'/>
                        <button>Submit</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Insta;