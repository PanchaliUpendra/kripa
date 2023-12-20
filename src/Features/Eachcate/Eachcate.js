import React, { useEffect } from 'react';
import './Eachcate.css';
import { ProductsData } from '../../ProductsData/ProductsData';
import { Tilt } from 'react-tilt'
import { useNavigate, useParams} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Eachcategory from '../../assests/eachcategory.png';

function Eachcate(){
    const navigate = useNavigate();
    const { cate } = useParams();

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
        window.scrollTo({top:0,behavior:'smooth'})
    },[]);
    return(
        <>
        <div className='eachcate-con'>
            <div className='each-category-banner'>
                <img src={Eachcategory} alt='each-cate' className='each-category-banner-img'/>
            </div>
            <div className='eachcate-con-head'>
                <h1>{`${cate}`}</h1>
                <p><span onClick={()=>navigate('/')}>Home / Collection /</span> {`${cate}`}</p>
            </div>
            <div className='shop-all-products'>
                {
                    ProductsData.filter((item)=>item.cate===`${cate}`).map((item,idx)=>(
                        
                        <div key={idx} className='shop-all-products-each-increase' onClick={()=>navigate(`/shop/${item.id}`)}>
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
                        
                        
                    ))
                }
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

export default Eachcate;