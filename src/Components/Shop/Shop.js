import React, { useEffect, useState } from 'react';
import './Shop.css';
//material ui icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//importing the framer motion
import { motion, useScroll, useSpring } from "framer-motion";
//import tilt js
import { Tilt } from 'react-tilt'

//carousel importing
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
//rao garu
import rao1 from '../../assests/bkpc.png';
import rao2 from '../../assests/raogaru2.png';
import rao3 from '../../assests/raogaru3.png';

//productsdata may goes here
import { ProductsData } from '../../ProductsData/ProductsData';

import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';


function Shop(){
    const navigate = useNavigate();

    //wishlist icons handle 
    const [addwishlist,setaddwishlist] = useState(false);

    //handling the filter
    const [filteravail,setfilteravail] = useState({
        instock:false,
        outofstock:false
    })
    const [filtertruec,setfiltertruec] = useState(0);

    
    const [filterdropdown,setfilterdropdown] = useState(false); //handling filter dropdown out of box


    

    function handleinstock(){
        setfilteravail(prev=>({
            ...prev,
            instock:!filteravail.instock
        }))
        
    }

    function handleoutofstock(){
        setfilteravail(prev=>({
            ...prev,
            outofstock:!filteravail.outofstock
        }))
       
    }

    function handlefilterreset(){
        setfilteravail(prev=>({
            ...prev,
            instock:false,
            outofstock:false
        }))
        
    }
    useEffect(()=>{
        function handletruecount(){
            var count=0;
            if(filteravail.instock===true){
                count+=1;
            }
            if(filteravail.outofstock===true){
                count+=1;
            }
            setfiltertruec(count);
        }
        handletruecount();
    },[filteravail]);
//filter process stops here

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });



    function numberwithcommas(x){
        let z=x;
        z=Math.floor(z);
        return z.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    }

    function funcaldis(d,p){
        let x = Number(d);
        let p1=Number(p);
        let n1=x*p1;
        n1=n1/100;
        p1=p1-n1;
        return p1;

    }


    const responsive = {
        0: { items: 1,
            itemsFit: 'contain',
        },
    };
    
    
    
    const items = [
        <div className='shop-inner-banner'>
            <img src={rao3} alt="banners" className='shop-banners-img'/>
        </div>,
        <div className='shop-inner-banner'>
            <img src={rao2} alt="banners" className='shop-banners-img'/>
        </div>,
        <div className='shop-inner-banner'>
            <img src={rao1} alt="banners" className='shop-banners-img'/>
        </div>
        
    ]

    // for prodects adding the tilt js
    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            20,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.02,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1500,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    useEffect(()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    },[]);
    return(
        <>
        <motion.div className="progress-bar" style={{ scaleX }} />
            <div className='shop-cur-first-div'>
                <AliceCarousel
                        mouseTracking
                        infinite={true}
                        items={items}
                        autoPlay={true}
                        responsive={responsive}
                        autoPlayInterval={2000}
                        animationDuration={2500}
                        touchMoveDefaultEvents
                        controlsStrategy='alternative'
                />
            </div>
            <div className='path'>
                <p>Home / <span>Productcs</span></p>
            </div>
            {/* shop filter and sort */}
            <div className='shop-filter-sort'>
                <div className='shop-filter-price'>
                    <div className='shop-filter'>
                        <p>filter :</p>
                        <div>
                            <div className='shop-filter-avail' onClick={()=>setfilterdropdown(prev=>!prev)}>
                                <p>availability</p>
                                <KeyboardArrowDownIcon fontSize="small"/>
                            </div>
                            <div  className={filterdropdown?'shop-filter-downbox':'shop-filter-downbox-inactive'}>
                                <div className='shop-filter-downbox-st-div'>
                                    <p>{filtertruec} selected</p>
                                    <p onClick={handlefilterreset}>Reset</p>
                                </div>
                                <div className='shop-filter-downbox-nd-div'>
                                    <div>
                                        <input type='checkbox' checked={filteravail.instock} onChange={()=>handleinstock()}/>
                                        <label>In Stock</label>
                                    </div>
                                    <div>
                                        <input type='checkbox' checked={filteravail.outofstock} onChange={()=>handleoutofstock()}/>
                                        <label>Out Of Stock</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shop-price'>
                        <p>price</p>
                        <KeyboardArrowDownIcon fontSize="small"/>
                    </div>
                </div>
                <div className='shop-sort-products'>
                    <div className='shop-sort'>
                        <p>sort</p>
                        <KeyboardArrowDownIcon fontSize="small"/>
                    </div>
                    <div>239 products</div>
                </div>
            </div>
            <div className='shop-all-products'>
                {
                    ProductsData.map((item,idx)=>(
                        <div key={idx} className='realative-div-in-shop-all-products'>
                        <div  className='shop-all-products-each-increase' onClick={()=>navigate(`/shop/${item.id}`)}>
                            <Tilt options={defaultOptions}>
                            <div>
                            <img src={item.imgurl} alt="all-products"/>
                            </div>
                            </Tilt>
                            <div className='shop-each-product-header'>
                                <p>{item.name}</p>
                                <p>Rs.{Number(item.dis)>0 && Number(item.dis)<=99?<span className='with-dis'>{numberwithcommas(funcaldis(item.dis,item.price))}<span className='dismiss-price'>{item.price}</span> <span className='percent-off-red'>({item.dis}% OFF)</span></span>:<span className='not-dis'>{numberwithcommas(item.price)}/-</span>}</p>
                            </div>
                           
                        </div>
                        <div className='shop-all-products-wishlist'>
                                {addwishlist?<FavoriteIcon sx={{color:'red'}} onClick={()=>setaddwishlist(prev=>!prev)}/>:<FavoriteBorderIcon sx={{color:'red'}} onClick={()=>setaddwishlist(prev=>!prev)}/>}
                        </div>
                        </div>
                        
                        
                    ))
                }
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

export default Shop;