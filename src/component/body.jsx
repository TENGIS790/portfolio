import React from 'react';
import './body.css'; 
import { IoIosPlanet } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Header from './header';

function Body(){
    return(
        <>
            <div className='bg'>
            <Header/>
                <h1 className='text'>Welcome to my website</h1>
                <div>
                    <button className='btn'>Send Message</button>
                </div>
                <div><h5 className='text2'>Designed by Uchral</h5></div>
                <div>
                    <button className='btn2'>Get Started-</button>
                </div>
                <div>
                    <h4 className='text3'>The design software
                         that keeps your flow
                         with AI tools and built-in
                         graphics 
                    </h4>
                </div>
                <div className='asd'>
                <IoIosPlanet size="111px" color="grey"/>
                </div>
                <div className='fb'><FaFacebook size="24px"/></div>
                <div className='msg'><FaFacebookMessenger size="24px"/></div>
                <div className='inst'><FaInstagram size="24px"/></div>
                <div className='yt'><FaYoutube size="24px"/></div>
            </div>
        </>
    );
}
export default Body;