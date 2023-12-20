import React, { useEffect } from 'react'
import './Contact.css';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import HikingIcon from '@mui/icons-material/Hiking';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Footer from '../../Components/Footer/Footer';
function Contact(){
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    },[]);
    return(
        <>
            <div className='contact-con'>
                <div className='contact-form'>
                    <div className='contact-form-header'>
                        <h1>Send Message</h1>
                    </div>
                    <div className='contact-form-all-inputs'>
                        <div>
                            <label>Name</label>
                            <input type='text' placeholder='Enter Your Name'/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type='email' placeholder='Enter Your Eamil'/>
                        </div>
                        <div>
                            <label>Subject</label>
                            <input type='text' placeholder='Subject'/>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea placeholder='Enter Description ...' />
                        </div>
                        <div className='contact-send-button'>
                            <button>Send</button>
                        </div>
                    </div>

                </div>
                <div className='contact-details'>
                    <div className='contact-details-header'>
                        <h1>Contact</h1>
                        <p>
                        Have questions, feedback, or need assistance? Our dedicated customer 
                        support team is here to help you. Feel free to reach out to us through the 
                        contact form below or connect with us via email or phone. We value your input and are 
                        committed to providing you with the best shopping experience. Thank you for choosing "Kripa Designers"!
                        </p>
                    </div>
                    {/* each detail for call  */}
                    <div className='each-detail-conatct'>
                        <div className='each-detail-conatct-icon'>
                            <PhoneEnabledIcon sx={{color:'white'}}/>
                        </div>
                        <div className='each-detail-conatct-items'>
                            <p>Phone</p>
                            <h1>+91-123456789</h1>
                        </div>
                    </div>
                    {/* each detail for email  */}
                    <div className='each-detail-conatct'>
                        <div className='each-detail-conatct-icon'>
                            <EmailIcon sx={{color:'white'}}/>
                        </div>
                        <div className='each-detail-conatct-items'>
                            <p>email</p>
                            <h1>kripadesigners@gmail.com</h1>
                        </div>
                    </div>
                    {/* each detail for follo  */}
                    <div className='each-detail-conatct'>
                        <div className='each-detail-conatct-icon'>
                            <HikingIcon sx={{color:'white'}}/>
                        </div>
                        <div className='each-detail-conatct-items'>
                            <p>Follow</p>
                            <div className='each-detail-conatct-items-icons'>
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
                    </div>
                </div>

            </div>

            <div className='contact-footer-adding'>
                <div className='shop-footer-below'>
                    <Footer/>
                </div>
                <div className="home-copy-right">
                    <p>©</p>
                    <p>2023 Kripa , Inc.</p>
                </div>
            </div>
            
        </>
    );
}

export default Contact;