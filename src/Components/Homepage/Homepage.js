import React, { useEffect } from "react";
import './Homepage.css';
import Footer from "../Footer/Footer";
import Insta from "../Insta/Insta";
import Bestseller from "../Bestseller/Bestseller";
import Products from "../Products/Products";
import { Typewriter } from 'react-simple-typewriter'
import AliceCarousel from 'react-alice-carousel';


import homepim2 from '../../assests/homeim2.PNG';

import feature1 from '../../assests/feature1.PNG';
import feature2 from '../../assests/feature2.PNG';
import feature3 from '../../assests/feature3.PNG';
import feature4 from '../../assests/feature4.PNG';
import feature5 from '../../assests/feature5.PNG';

import pro10 from '../../assests/pro9.jpg';
import female4 from '../../assests/female4.PNG';

import pro1 from '../../assests/pro1.jpg';
import pro9 from '../../assests/pro10.jpg';
import pro6 from '../../assests/pro6.jpg';

import pro11 from '../../assests/pro8.jpg';

import kripa1 from '../../assests/kripa1.PNG';
import { useNavigate } from "react-router-dom";

function Homepage(){

    const navigate = useNavigate();
    const responsive = {
        0: { items: 1,
        },
       412:{
        items:2,
       },
        786:{
            items:3,
        },
        1040:{
            items:4,
           
        },
        
    };
    const items = [
                        <div className="home-con-sec1-div">
                            <img src={feature1} alt="features" className="home-con-sec-img2"/>
                        </div>,
                        <div className="home-con-sec1-div">
                            <img src={feature2} alt="features" className="home-con-sec-img2"/>
                        </div>,
                        <div className="home-con-sec1-div">
                            <img src={feature3} alt="features" className="home-con-sec-img2"/>
                        </div>,
                        <div className="home-con-sec1-div">
                            <img src={feature4} alt="features" className="home-con-sec-img2"/>
                        </div>,
                        <div className="home-con-sec1-div">
                            <img src={feature5} alt="features" className="home-con-sec-img2"/>
                        </div>
                    ]
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    },[]);
    return(
        <>
            <div className="home-con">
                <img src={homepim2} alt="style pics" className="home-style-img"/>
                <img src={homepim2} alt="style pics" className="home-style-img123"/>
                <div className="home-first-header">
                    <ul>
                        <li onClick={()=>navigate('/collection/sleepware')}>sleepware & nighty's</li>
                        <li onClick={()=>navigate('/collection/night-suit')}>night suit & moonlight elegance</li>
                        <li onClick={()=>navigate('/collection/bottoms')}>bottoms</li>
                        <li onClick={()=>navigate('/collection/t-shirts')}>t-Shirts</li>
                        <li onClick={()=>navigate('/collection/leggins')}>leggins</li>
                        <li onClick={()=>navigate('/collection/ladies-inners')}>ladies inners</li>
                    </ul>
                </div>
                <div className="home-sec">
                    <div className="home-sec-div1">
                        <h1>collections</h1>
                        <p>Discover timeless elegance and contemporary 
                            styles with our curated collection of women's 
                            fashion, where each piece is a celebration of  
                             </p>
                        <p><span style={{marginLeft:'5px'}}>
                             <Typewriter
            words={['Confidence', 'Individuality', 'Sophistication And Grace']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
                                </span>.</p>
                        <button onClick={()=>navigate('/shop')}>Shop Now</button>
                    </div>
                    <div className="home-sec-div2">
                        <div className="home-sec-div-border">
                            <img src={pro11} alt="home logo"/>
                        </div>
                    </div>
                </div>
            </div>
                {/* `<div className="home-con-sec">
                        <img src={feature1} alt="features"/>
                        <img src={feature2} alt="features"/>
                        <img src={feature3} alt="features"/>
                        <img src={feature4} alt="features"/>
                        <img src={feature5} alt="features"/>
                </div> */}
            
            <div className='homepage-scroll-cur-div'>
                <AliceCarousel
                        mouseTracking
                        infinite={true}
                        items={items}
                        autoPlay={true}
                        responsive={responsive}
                        autoPlayInterval={1000}
                        animationDuration={1500}
                        touchMoveDefaultEvents
                        controlsStrategy='alternative'
                        disableDotsControls={true}
                        disableButtonsControls={true}
                />
            </div>
            <div className="special-third-div">
                <p>Explore new and popular styles</p>
                <div className="home-con-third">
                    <div className="home-con-third1" onClick={()=>navigate('/shop')}>
                        <div>
                            <img src={pro9} alt="female1-fea"/>
                            <div className="homepage-first-div-category">
                                <ul>
                                    <li>Comfy everyday styles</li>
                                    <li>Comfortable and stylish</li>
                                    <li>Pretty and graceful designs</li>
                                    <li>Great for casual or active wear</li>
                                    <li>From casual to standout pieces</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="home-con-third2">
                        <div onClick={()=>navigate('/collection/t-shirts')}>

                            <img src={pro1} alt="female pics" />
                           
                            <div className="inner-category-linear">
                                <h1>t-Shirts</h1>
                            </div>
                        </div>

                        <div onClick={()=>navigate('/collection/leggins')}>
                            <img src={pro6} alt="female pics" />
                            <div className="inner-category-linear">
                                <h1>leggins</h1>
                            </div>
                        </div>

                        <div onClick={()=>navigate('/collection/sleepware')}>
                            <img src={pro10} alt="female pics" />
                            <div className="inner-category-linear">
                                <h1>sleepware</h1>
                            </div>
                        </div>

                        <div onClick={()=>navigate('/collection/ladies-inners')}>
                            <img src={female4} alt="female pics" />
                            <div className="inner-category-linear">
                                <h1>ladies inners</h1>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <Products/>
            <div className="zara-con">
                <div>
                    <h1>KRIPA</h1>
                    <img src={kripa1} alt='zara 1'/>
                </div>
                <div>
                    <h1>KRIPA</h1>
                    <h1>kripa</h1>
                    <p>Lustrous yet understated. The new evening
                    wear collection exclusively offered at the
                    reopened Giorgio Armani boutique in Los
                    Angeles.</p>
                    <button onClick={()=>navigate('/shop')}>See Collection</button>
                </div>

            </div>
            <Bestseller/>
            <Insta/>
           <Footer/>
           <div className="home-copy-right">
                <p>©</p>
                <p>2023 Kripa , Inc.</p>
           </div>
        </>
    );
}

export default Homepage;