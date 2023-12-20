import React from 'react';
import './Footer.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import { useNavigate } from 'react-router-dom';

function Footer(){
    const navigate = useNavigate();
    return(
        <>
            <div className='footer-inner'>
                <div className='footer-imp'>
                    <h1>kripa</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua</p>
                    <div className='footer-imp-icon'>
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
                </div>
                <div className='footer-other'>
                    <h1>catalog</h1>
                    <p onClick={()=>navigate('/collection/sleepware')}>nighty's</p>
                    <p onClick={()=>navigate('/collection/night-suit')}>night suit</p>
                    <p onClick={()=>navigate('/collection/bottoms')}>bottoms</p>
                    <p onClick={()=>navigate('/collection/t-shirts')}>t-shirts</p>
                    <p onClick={()=>navigate('/collection/leggins')}>leggins</p>
                    <p onClick={()=>navigate('/collection/ladies-inners')}>ladies inners</p>
                </div>
                <div className='footer-other'>
                    <h1>ABOUT US</h1>
                    <p>Our Producers</p>
                    <p>Sitemap</p>
                    <p>FAQ</p>
                    <p>About Us</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className='footer-other'>
                    <h1>CUSTOMER SERVICES</h1>
                    <p>Contact Us</p>
                    <p>Track Your Order</p>
                    <p>Product Care & Repair</p>
                    <p>Book an Appointment</p>
                    <p>Shipping & Returns</p>
                </div>
            </div>
        </>
    );
}

export default Footer;