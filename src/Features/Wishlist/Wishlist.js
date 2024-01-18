import React, { useContext } from 'react';
import './Wishlist.css';
import emptylist from '../../assests/emptylist.gif';
import Footer from '../../Components/Footer/Footer';
import MyContext from '../../MyContext';
import {ProductsData} from '../../ProductsData/ProductsData';
import Navbar from '../../Components/Navbar/Navbar';
//material ui icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
//firebase importing
import { writeBatch,doc} from "firebase/firestore";
import { db } from '../../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';

function Wishlist(){
    const sharedvalue = useContext(MyContext);
    //firestore write batch declaring 
    const batch = writeBatch(db);
    //these are the coding lines for wishlist
    async function handlewritewishlist(id){
        try{

            if(sharedvalue.wishlist.includes(id)){
                const batchrf = doc(db, "users", sharedvalue.uid);
                batch.update(batchrf,{"wishlist":sharedvalue.wishlist.filter(item=>item!==id)});
                await batch.commit();

            }else{
                const sfDocRef = doc(db, "users", sharedvalue.uid);
                batch.update(sfDocRef,{"wishlist":[...sharedvalue.wishlist,id]});
                await batch.commit();
            }
        }catch(e){
            console.error('you got an error while updating the wishlist',e);
        }
    }
    function numberwithcommas(x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    }

    const navigate = useNavigate();
    return(
        <>
        <Navbar/>
        {
            sharedvalue.wishlist.length>0?
            <div>
                <div className='eachcate-con-head'>
                    <h1>Wishist</h1>
                    <p><span onClick={()=>navigate('/')}>Home / Collection /</span> Wishlist</p>
                </div>
                <div className='products-all-images'>
                        {ProductsData.filter((preitem)=>sharedvalue.wishlist.includes(preitem.id)).map((item,idx)=>(
                            
                                <div key={idx} className='grid-pro-columns' >
                                    <div onClick={()=>navigate(`/shop/${item.id}`)}>
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
                                    <div className='shop-all-products-wishlist' onClick={()=>handlewritewishlist(item.id)}>
                                        {sharedvalue.wishlist.includes(item.id)?<FavoriteIcon sx={{color:'red'}} />:<FavoriteBorderIcon sx={{color:'red'}} />}
                                    </div>
                                </div>
                                
                            
                        ))}
                    </div>
                </div>
                :
                <div className='wishlist-con'>
                    <img src={emptylist} alt='emptylist'/>
                    <p>"Your wishlist is currently empty. Start adding items to create your personalized collection of must-haves!"</p>
                </div>
        }
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

export default Wishlist;