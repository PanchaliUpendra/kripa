import React, { useEffect, useState } from 'react';
import './Eachitem.css';
import { ProductsData } from '../../ProductsData/ProductsData';
import { useParams } from 'react-router-dom';
import { Tilt } from 'react-tilt'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';


function Eachitem(){
    const navigate = useNavigate();
    const [size,setsize] = useState('')
    const [quantity,setquantity] = useState(1);
    const {id} = useParams();
    const [cate,setcate]=useState([]);


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

    useEffect(()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    },[id]);

    return(
        <>
        <div className='eachitemview-one'>
            {
                ProductsData.filter((item)=>Number(item.id)===Number(id)).map((product,idx)=>(
                    <div key={idx} onLoad={()=>setcate(product.cate)}>
                        <div className='eachitem-eachview'>
                            <div>
                                <img src={product.imgurl} alt="pic-loading"/>
                            </div>
                            <div className='eachitem-detail'>
                                <div className='eachitem-detail-header'>
                                    <h1>{product.name}</h1>
                                    <p>Rs.{Number(product.dis)>0 && Number(product.dis)<=99?<span className='with-dis'>{numberwithcommas(funcaldis(product.dis,product.price))}<span className='dismiss-price'>{product.price}</span> <span className='percent-off-red'>({product.dis}% OFF)</span></span>:<span className='not-dis'>{numberwithcommas(product.price)}/-</span>}</p>
                                </div>
                                <div className='eachitem-size'>
                                    <p>size</p>
                                    <ul>
                                        {(Number(product.xsc)!==0 && Number(product.xsc)>0)?<li className={size==='xs'?'eachitem-size-active':'eachitem-sixe-inactive'} onClick={()=>setsize('xs')}>xs</li>:<li className='eachitem-size-disable'>xs</li>}
                                        {(Number(product.sc)!==0 && Number(product.sc)>0)?<li className={size==='s'?'eachitem-size-active':'eachitem-sixe-inactive'} onClick={()=>setsize('s')}>s</li>:<li className='eachitem-size-disable'>s</li>} 
                                        {(Number(product.mc)!==0 && Number(product.mc)>0)?<li className={size==='m'?'eachitem-size-active':'eachitem-sixe-inactive'} onClick={()=>setsize('m')}>m</li>:<li className='eachitem-size-disable'>m</li>} 
                                        {(Number(product.lc)!==0 && Number(product.lc)>0)?<li className={size==='l'?'eachitem-size-active':'eachitem-sixe-inactive'} onClick={()=>setsize('l')}>l</li>:<li className='eachitem-size-disable'>l</li>} 
                                        {(Number(product.xlc)!==0 && Number(product.xlc)>0)?<li className={size==='xl'?'eachitem-size-active':'eachitem-sixe-inactive'} onClick={()=>setsize('xl')}>xl</li >:<li className='eachitem-size-disable'>xl</li>} 
                                        {(Number(product.xxlc)!==0 && Number(product.xxlc)>0)? <li className={size==='xxl'?'eachitem-size-active':'eachitem-sixe-inactive'} onClick={()=>setsize('xxl')}>xxl</li>: <li className='eachitem-size-disable'>xxl</li>} 
                                        {(Number(product.xxxlc)!==0 && Number(product.xxxlc)>0)? <li className={size==='xxxl'?'eachitem-size-active':'eachitem-sixe-inactive'} onClick={()=>setsize('xxxl')}>xxxl</li>: <li className='eachitem-size-disable'>xxxl</li>} 
                                    </ul>
                                </div>
                                <div className='eachitem-quantity'>
                                    <p>quantity</p>
                                    <div>
                                        <p onClick={()=>decquan()}>-</p>
                                        <p>{quantity}</p>
                                        <p onClick={()=>incquan()}>+</p>
                                    </div>
                                    
                                </div>
                                <div className='eachitem-buy-now'>
                                    <button>add to cart</button>
                                    <button>buy now</button>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                ))
            }
        </div>
        <div className='eachitem-related-items'>
            <h1>might want to check this . . .</h1>
        </div>
        <div className='shop-all-products'>
            {
                ProductsData.filter((item1)=>item1.cate===cate && Number(item1.id)!==Number(id)).map((item,idx)=>(
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

export default Eachitem;