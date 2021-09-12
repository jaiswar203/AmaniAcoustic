import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className="footer"> 
                <div className="footer-about-us">
                    <h3>About Us:-</h3>
                    <p>Aman Acoustics means to give great reasonable and financially savvy plan guidance to our customers over a scope of ventures and areas. We work intimately with Architects, Building Contractors, and Design Teams to guarantee a consistent joining of acoustics with the venture necessities.</p>
                </div>
                <div className="footer-contact-info">
                    <h3>Contact us:-</h3>
                    <div className="address"> <i className="fas fa-location-arrow"></i> <address> Office No. 9-A, Ground Floor, The Chamber Plot No. 89, Opp. NKGSB Bank, Shayadri Nagar, Sector No.1, Charkop, Kandivali (W), Mumbai-400067, India</address></div>
                    <div className="phone"><i className="fas fa-phone-alt"></i> <h6> +91 9821244410</h6> </div>
                    <div className="email"> <i className="fas fa-envelope-open"></i> <h6> info@amanacoustic.in </h6> </div>
                </div>
                <div className="footer-services">
                    <h3>Our Services:-</h3>
                    <ul>
                        <li><Link href='/musicstudio'><a>Music Studio</a></Link></li>
                        <li><Link href='/comercial'><a>Commercial</a></Link></li>
                        <li><Link href='/cinemas'><a>Cinemas</a></Link></li>
                        <li><Link href='/educational'><a>Educational</a></Link></li>
                        <li><Link href='/hotel'><a>Hotel</a></Link></li>
                        <li><Link href='/healthcare'><a>HealthCare</a></Link></li>
                        <li><Link href='/residential'><a>Residential</a></Link></li>
                        <li><Link href='/retail'><a>Retail</a></Link></li>
                        <li><Link href='/floatingstudio'><a>Floating Studio</a></Link></li>
                        <li><Link href='/interior'><a>Interior Designe</a></Link></li>
                        <li><Link href='/decor'><a>Home Decor</a></Link></li>
                        <li><Link href='/furniture'><a>Furniture World</a></Link></li>
                    </ul>
                </div>
            </footer> 
            <div className="social">
                <div className="social-icon">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-pinterest"></i>
                </div>
                <div className="copyright">
                    <i className="copyright-icon">
                        &copy;
                    </i>
                    <p>2018 All rights reserved by Aman Acoustic Design By: Connectix-x</p>
                </div>
            </div>  
        </>
    )
}

export default Footer
