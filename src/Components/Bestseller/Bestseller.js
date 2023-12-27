import React from "react";
import './Bestseller.css';
import { Data } from "./Data";
import { useNavigate } from "react-router-dom";
// import { useRef } from "react";
// import { motion, useScroll } from "framer-motion";


function Bestseller(){
    const navigate = useNavigate();
    // const ref = useRef(null);
    // const { scrollXProgress } = useScroll({ container: ref });
    return(
        <>
        <div className="bestsell-con">
            <div className="bestsell-head">
                <h1>best sellers</h1>
                <p>Discover our best sellers—handpicked favorites and top-rated items that embody quality and satisfaction in our online store.</p>
            </div>
            <div className="bestsell-view-all">
                <button onClick={()=>navigate('/shop')}>View All</button>
            </div>
            
            <div className="bestsell-all-pro" >
                {Data.map((item,idx)=>(
                    <div className="bestseller-each-div" key={idx}>
                        <div className="best-images">
                            <img src={item.imgurl} alt="best-seller"/>
                        </div>
                        <h1>{item.name}</h1>
                        <div className="bestseller-dress-price">
                        <p>Dress</p>
                        <p>${item.price}</p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
        </>
    );
}

export default Bestseller;