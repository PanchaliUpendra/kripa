import React, { useContext, useEffect, useState } from 'react';
import './Addtocart.css';

import Emptycart from '../../assests/emptycart.gif'
import Footer from '../../Components/Footer/Footer';
import MyContext from '../../MyContext';
import {ProductsData} from '../../ProductsData/ProductsData';

import atcimg from '../../assests/addtocart.png';

function Addtocart(){

    const [cartkeys,setcartkeys] = useState([]);
    const sharedvalue = useContext(MyContext); // importing the sharedvalue
    

    useEffect(() => {
        if (sharedvalue && sharedvalue.cart && sharedvalue.cart[0]) {
          const tempkeys = Object.keys(sharedvalue.cart[0]);
          setcartkeys(tempkeys);
        }
      }, [sharedvalue]);
    return(
        <>{cartkeys.length===0?
            <div className='addtocart-con'>
            <img src={Emptycart} alt='emptycart'/>
        </div>
        :
        <div>
            <div className='addtocart-first-img'>
                <img src={atcimg} alt='addtocart'/>
            </div>
            
            <h1>Hello cart</h1>
            {ProductsData.filter((item)=>cartkeys.includes(JSON.stringify(item.id))).map((product,idx)=>(
                <div key={idx}>
                    <img src={product.imgurl} alt='product-pic'/>
                    <h1>{sharedvalue.cart[0][product.id].size}</h1>
                    <h2>{sharedvalue.cart[0][product.id].qty}</h2>
                </div>
            ))}
        </div>
        }
            
            <Footer/>
        </>
    );
}

export default Addtocart;