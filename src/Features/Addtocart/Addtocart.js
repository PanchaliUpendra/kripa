import React, { useContext, useEffect, useState } from 'react';
import './Addtocart.css';

import Emptycart from '../../assests/emptycart.gif'
import Footer from '../../Components/Footer/Footer';
import MyContext from '../../MyContext';
import {ProductsData} from '../../ProductsData/ProductsData';

import atcimg from '../../assests/addtocart.png';
import { useNavigate } from 'react-router-dom';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Addtocart(){

    const [cartkeys,setcartkeys] = useState([]);
    const [quantity,setquantity] = useState(0);
    const sharedvalue = useContext(MyContext); // importing the sharedvalue

    //size selection value 
    // const [csize,setcsize] = useState("");

    const navigate = useNavigate();

    // function subtraction
    function decquan(){
        if(quantity>1){
            setquantity(prev=> prev-1);
        }
    }
    //function addition
    function incquan(){
        setquantity(prev=> prev+1);
    }

    //function number with commas
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
        <div className='addtocart-second-con'>
            <div className='addtocart-first-img'>
                <img src={atcimg} alt='addtocart'/>
            </div>
            <div className='eachcate-con-head'>
                <h1>Cart</h1>
                <p><span onClick={()=>navigate('/shop')}>Home / Shop /</span> Cart</p>
            </div>
            <div className='addtocart-all-items'>
            {ProductsData.filter((item)=>cartkeys.includes(JSON.stringify(item.id))).map((product,idx)=>(
                <div key={idx} className='addtocart-each-item'>
                    <div className='addtocart-ei-img'>
                    <img src={product.imgurl} alt='product-pic'/>
                    </div>
                    <div className='addtocart-eachitem-details'>
                        <h1>{product.name}</h1>
                        <p>Rs.{Number(product.dis)>0 && Number(product.dis)<=99?<span className='with-dis'>{numberwithcommas(funcaldis(product.dis,product.price))}<span className='dismiss-price'>{product.price}</span> <span className='percent-off-red'>({product.dis}% OFF)</span></span>:<span className='not-dis'>{numberwithcommas(product.price)}/-</span>}</p>
                        <div className='addtocart-size-qty'>
                            <div className='addtocart-size-seclection'>
                                <label>Size</label>
                                <select value={sharedvalue.cart[0][product.id].size} >
                                    <option value="">Select</option>
                                    <option value="xs">XS</option>
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                    <option value="xl">XL</option>
                                    <option value="xxl">XXL</option>
                                    <option value="xxxl">XXXL</option>
                                </select>
                            </div>
                            <div className='eachitem-quantity'>
                                <p>quantity</p>
                                    <div className='eachitem-quantity-paras'>
                                        <p onClick={()=>decquan()}>-</p>
                                        <p>{sharedvalue.cart[0][product.id].qty}</p>
                                        <p onClick={()=>incquan()}>+</p>
                                    </div>      
                            </div>
                        </div>
                        <div className='addtocart-remove-item'>
                            <DeleteOutlineOutlinedIcon sx={{color:'red'}}/>
                            <p>Remove Item</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            
        </div>
        }
            
            <Footer/>
        </>
    );
}

export default Addtocart;