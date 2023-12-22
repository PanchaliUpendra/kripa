import React, { useEffect } from 'react';
import './About.css';
import Footer from '../Footer/Footer';

function About(){
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'smooth'});
    },[]);
    return(
        <>
            <div className='about-con'>
                <div className='about-intro'>
                    <div>
                        <h1>Welcome to Kripa Designers</h1>
                        <h2>Introduction</h2>
                        <p>Welcome to Kripa Designers, a distinguished purveyor of premium ladies' innerwear. 
                            With a specialization in exquisite nighties, bras, and lingerie, we pride ourselves 
                            on offering a meticulously curated selection that seamlessly merges comfort with style. Our 
                            commitment to excellence is fortified by the robust foundation of Varun Designers, a venerable 
                            entity with an illustrious 15-year legacy in the industry.
                        </p>
                    </div>
                </div>
                <div className='about-intro'>
                    <div>
                        <h2>Commitment to Quality:</h2>
                        <p>At Kripa Designers, we epitomize sophistication. Each product 
                            we present is a paragon of superior craftsmanship, ensuring 
                            that our customers receive only the highest quality garments. 
                            Our unwavering dedication to quality is a testament to the 
                            legacy of Varun Designers, and we take pride in upholding their 
                            standards.
                        </p>
                    </div>
                </div>
                <div className='about-intro'>
                    <div>
                    <h2>Empowering Women:</h2>
                        <p>Our vision is rooted in empowering women. We believe that 
                            intimate apparel should not only complement the contours of the
                             body but also enhance the confidence of every wearer. With 
                             this in mind, we meticulously design each garment to provide 
                             both comfort and style, allowing our customers to feel their 
                             best.
                        </p>
                    </div>
                </div>
                <div className='about-intro'>
                    <div>
                    <h2>Customer Satisfaction:</h2>
                        <p>Customer satisfaction is at the core of our values. We are 
                            committed to delivering unparalleled excellence in design and 
                            service, ensuring that our customers have a seamless and 
                            enjoyable experience with Kripa Designers. Our team is 
                            dedicated to meeting and exceeding expectations, providing 
                            personalized assistance and guidance to help our customers 
                            find the perfect pieces.
                        </p>
                    </div>
                </div>

                <div className='about-intro'>
                    <div>
                        <h2>Vision and Expertise:</h2>
                        <p>Embark on a journey of elegance and comfort with Kripa Designers, 
                            where Varun Designers' seasoned expertise converges with contemporary 
                            sensibilities. We redefine the standards of ladies' innerwear, offering 
                            a world where every garment is an embodiment of timeless grace. Experience the 
                            seamless blend of fashion and functionality that sets us apart.
                        </p>
                    </div>
                </div>

                <div className='about-intro'>
                    <div>
                        <h2>Invitation to Explore:</h2>
                        <p>Discover the allure of Kripa Designers and indulge in the finest
                             ladies' innerwear. We invite you to explore our collection and
                              embrace a world of sophistication, comfort, and confidence.
                        </p>
                    </div>
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

export default About;