import React from 'react';
import Image from 'next/image';
import Instagram from '../public/assets/instagram-xxl.png';
import Discord from '../public/assets/discord-2-xxl.png';
import Twitter from '../public/assets/twitter-xxl.png';

function Footer() {
    return (
        <div className='footer'>
            <div className="firstRow">
                <h1><a href={"#"}>AURUM</a></h1>
            </div>
            <div className="firstRow">
                <h3>Contact</h3>
                <ul className='footerLinks'>
                    <li className='footerBullets'><a>goldiegufron@gmail.com</a></li>
                </ul>
            </div>
            <div className="thirdRow">
                <h3>Links</h3>
                <div>
                    <ul className='footerLinks'>
                        <li className='footerBullets'><a href={"#"}>Home</a></li>
                        <li className='footerBullets'><a href={"#about"}>About</a></li>
                        <li className='footerBullets'><a href={"#features"}>Features</a></li>
                        <li className='footerBullets'><a href={"#gallery"}>Gallery</a></li>
                    </ul>
                </div>
            </div>
            <div className="fourthRow">
                <h3>Our Networks</h3>
                <div className="networks">
                    <Image src={Instagram} width={20} height={20}></Image>
                    <Image src={Discord} width={20} height={20}></Image>
                    <Image src={Twitter} width={20} height={20}></Image>
                </div>
            </div>
        </div>
    );
}

export default Footer;