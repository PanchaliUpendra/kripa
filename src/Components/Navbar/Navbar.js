import React, { useContext, useEffect, useState } from "react";
import './Navbar.css';
import navim1 from '../../assests/navim1.PNG';
import CloseIcon from '@mui/icons-material/Close';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Badge from '@mui/material/Badge';
/* navbar modification*/
import Drawer from '@mui/material/Drawer';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MyContext from "../../MyContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Navbar(){
    const navigate = useNavigate();

    const [keyslen,setkeyslen] = useState(0);

    //notify for signout
    const signoutnotify = () => toast.success('sucessfully signed out!!');
    //function for signout
    async function funsignout(){
        try{
            await signOut(auth).then(() => {
                signoutnotify();
                navigate('/');
              }).catch((error) => {
                console.log('you got an error while logout',error);
                alert('error!!!!');
              });
              
        }catch(e){
            console.log('you got error while sigout',e);
        }
    }
    const [menutoggle,setmenutoggle] = useState({
        left:false
    });
   

    const sharedvalue = useContext(MyContext);
   
   

    useEffect(() => {
        
        if(menutoggle.left===false){
            document.body.style.overflow = 'visible';
        }
        else{
            document.body.style.overflow = 'hidden';
        }
      }, [menutoggle]);
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setmenutoggle({...menutoggle,[anchor]:open});
      };
      const list = (anchor) => (
        <ul
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          className="list-box"
          role="presentation"
          >
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/shop'><li>Shop</li></NavLink>
            <NavLink to='/collection/sleepware'><li>sleepware & nighty's</li></NavLink>
            <NavLink to='/collection/night-suit'><li>night suit & moonlight elegance</li></NavLink>
            <NavLink to='/collection/bottoms'><li>bottoms</li></NavLink>
            <NavLink to='/collection/t-shirts'><li>t-Shirts</li></NavLink>
            <NavLink to='/collection/leggins'><li>leggins</li></NavLink>
            <NavLink to='/collection/ladies-inners'><li>ladies inners</li></NavLink>
            <NavLink to='/about'><li>about us</li></NavLink>
            <NavLink to='/storelocator'><li>store locator</li></NavLink>
            <NavLink to='/contact'><li>contact</li></NavLink>
            
            {sharedvalue.isauthed===true && sharedvalue.isAdmin && sharedvalue.uid===sharedvalue.admin && <NavLink to='/dashboard'><li>Dashboard</li></NavLink>}
            {sharedvalue.isauthed?<li onClick={()=>funsignout()}>Sign Out</li>:<NavLink to='/login'><li>login</li></NavLink>}
            <div className="ul-li-icons-navbar">
            <a href="https://www.facebook.com/profile.php?id=61553982164535" target="_blank" rel="noopener noreferrer">
            <FacebookIcon/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61553982164535" target="_blank" rel="noopener noreferrer">
            <InstagramIcon/>
            </a>
            <a href="https://www.linkedin.com/in/kripa-designers-993a652a4/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon/>
            </a>
            <a href="https://www.youtube.com/channel/UCcrGsCONMySEu_jlp5q26yw" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon/>
            </a>
            </div>
        </ul>
        )
    //navbar modification ends here

    //calculating the length of the keys !!!
    useEffect(() => {
        if (sharedvalue && sharedvalue.cart && sharedvalue.cart[0]) {
          const tempkeyslen = Object.keys(sharedvalue.cart[0]).length;
          setkeyslen(tempkeyslen);
        }
      }, [sharedvalue]);


    return(
        <>
           {menutoggle.left===false? <div className="nav-discount-div">
                <p>Get a flat 10% discount on your first purchase when you use the coupon: Welcome10</p>
            </div>:<></>}
            <div className="nav-con">
                <div className="nav-in-con">
                    <div  className="navbar-menu-icons">
                        {menutoggle.left?<CloseIcon sx={{ fontSize: 30 }} onClick={toggleDrawer('left', false)}/>:<MenuOpenIcon sx={{ fontSize: 30 }} onClick={toggleDrawer('left', true)}/>}
                    </div>
                    <div>
                        <div className="nav-in-div1">
                            <img src={navim1} alt="navim"/>
                            <h1 onClick={()=>navigate('/')}>kripa</h1>
                            <img src={navim1} alt="navim"/>
                        </div>
                        <p className="empowered-name">Empowered By Varun Designers</p>
                    </div>
                    {/* <div className="nav-in-div1">
                        <img src={navim1} alt="navim"/>
                        <h1 onClick={()=>navigate('/')}>kripa</h1>
                        <img src={navim1} alt="navim"/>
                    </div> */}

                    {sharedvalue.isauthed ?<div className="wishlist-icons">
                    <Badge badgeContent={sharedvalue.wishlist.length} color="error">
                        <FavoriteBorderIcon onClick={()=>navigate('/wishlist')}/>
                    </Badge>
                    <Badge badgeContent={keyslen} color="error">
                        <LocalMallIcon onClick={()=>navigate('/cart')}/>
                    </Badge>
                    </div>: <div>
                        <div className="nav-login">
                            <h1 onClick={()=>navigate('/login')} style={{cursor:'pointer'}}>Login</h1>
                        </div>
                    </div>}
                    
                </div>
            </div>
            <Drawer
            anchor={'left'}
            open={menutoggle['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
          {/* toastcontainer */}
          <ToastContainer
            position="top-center"
            autoClose={2000}
            limit={1}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"
            />
        </>
    );
}

export default Navbar;