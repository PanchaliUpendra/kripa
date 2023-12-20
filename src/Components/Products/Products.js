import React from 'react';
import './Products.css';
import { products as Data } from '../Bestseller/Data';
import { useNavigate } from 'react-router-dom';
function Products(){
    const navigate = useNavigate();
    function numberwithcommas(x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    }
    return(
        <>
            <div className='products-con'>
                <div className='products-header'>
                    <h1>Discover Premium Selections</h1>
                    <p>Discover curated, high-quality products for a stylish and functional shopping experience.</p>
                </div>
                <div className='products-mini-nav'>
                    <div className='products-mini1'>
                        <ul>
                            <li onClick={()=>navigate('/shop')}>all products</li>
                            <li onClick={()=>navigate('/collection/t-shirts')} style={{cursor:'pointer'}}>t-shirts</li>
                            <li onClick={()=>navigate('/collection/bottoms')} style={{cursor:'pointer'}}>bottoms</li>
                            <li onClick={()=>navigate('/collection/leggins')} style={{cursor:'pointer'}}>leggins</li>
                        </ul> 
                    </div>
                    <div className='products-mini2'>
                        <button onClick={()=>navigate('/shop')}>view all</button>
                    </div>
                </div>
                <div className='products-all-images'>
                    {Data.map((item,idx)=>(
                        <div key={idx} className='grid-pro-columns' onClick={()=>navigate(`/shop/${item.id}`)}>
                            <section>

                            <img src={item.imgurl} alt="products"/>
                            </section>
                            <div className='grid-img-sale-div'>
                                <p>sale</p>
                            </div>
                            <div className='grid-products-name'>
                                <h1>{item.name}</h1>
                                <p>Rs. <span>{numberwithcommas(item.price)}/-</span></p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default Products;