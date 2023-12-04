import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import logo from '../assets/logo.svg';
import minus from "../assets/minus.svg";
import burger from "../assets/burger.svg";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return <nav className='transition-all duration-100 sm:px-16 px-6 w-full flex items-center fixed py-5 top-0 bg-black border-b-2 border-b-white font-opensans z-40'>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
            <div className='flex items-center gap-1 transition-all duration-100'>
                <img src={logo} alt={logo} className="w-9 h-9 object-contain border-solid border-white border-2 rounded-full"/>
                <p className=' text-[22px] font-bold text-green flex'>ENOS<span className='text-white'>IN</span>TECH</p>
            </div>
            <div className='flex transition-all duration-100'>
                <div className='hidden lg:flex justify-center items-center gap-3'>
                <a href='https://github.com/enosintech' target="_blank"><FontAwesomeIcon className='h-6 w-6 hover:opacity-75 text-white active-opacity-50' icon={faGithub} /></a>
                <a href='https://medium.com/@enos.nsambaj' target="_blank"><FontAwesomeIcon className='h-6 w-6 hover:opacity-75 text-white active-opacity-50' icon={faMedium} /></a>
                <a href='https://www.linkedin.com/in/enos-nsamba-a43a76157/' target="_blank"><FontAwesomeIcon className='h-6 w-6 hover:opacity-75 text-white active-opacity-50' icon={faLinkedin} /></a>
            </div>
            </div>
        

        <div className='lg:hidden translate-x-5 transition-all flex flex-1 justify-end items-center'>
            <img src={toggle ? minus : burger } alt="menu" className='w-[50px] h-[50px] object-contain cursor-pointer hover:opacity-50 active:opacity-25' onClick={() => setToggle(!toggle)} />
            
            <div className={`${!toggle ? "hidden" : "flex" } flex-col gap-5 p-6 bg-black absolute top-20 right-0 mx-4 my-3.5 min-w-[140px] z-10 border-solid border-2 border-green shadow-green `}>
                <div className='flex justify-center items-center gap-2'>
                    <a href="https://github.com/enosintech" target="_blank"><FontAwesomeIcon className='h-6 w-6 hover:opacity-75 text-white active:opacity-50' icon={faGithub}/></a>
                    <a href="https://medium.com/@enos.nsambaj" target="_blank"><FontAwesomeIcon className='h-6 w-6 hover:opacity-75 text-white active:opacity-50' icon={faMedium}/></a>
                    <a href="https://www.linkedin.com/in/enos-nsamba-a43a76157/" target="_blank"><FontAwesomeIcon className='h-6 w-6 hover:opacity-75 text-white active:opacity-50' icon={faLinkedin}/></a>
                </div>
            </div>
        </div>
        </div>
    </nav>
}

export default Navbar;