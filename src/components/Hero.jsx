import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import astro from "../assets/astro.png";
import arrow from "../assets/arrow.svg";
import resume from "../assets/resume.png";
import javascriptCert from "../assets/javascriptCert.png";
import responsiveCert from "../assets/responsiveWeb.png";

const CertificationsComponent = (props) => {
    return (
        <div className='w-[90%] min-h-full h-full rounded'>
            <img
                src={props.image}
                className='w-full h-full rounded object-contain'
                alt='Certification'
            />
        </div>
    )
}

const Hero = () => {
    const [ visible, setVisible ] = useState(false);
    const [view, setView ] = useState("Resume");

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * max) + min;
    }

    const createStars = (type, quantity) => {
        for(let i = 0; i < quantity; i++){

            const stars = document.getElementById("stars");
            let star = document.createElement('div');

            star.classList.add('star', `type-${type}`);
            star.style.left = `${randomNumber(1, 99)}%`;
            star.style.bottom= `${randomNumber(1, 99)}%`;
            star.style.animationDuration= `${randomNumber(50, 200)}s`;
            stars.appendChild(star)
        }
    }

    return (
        <section className={`relative heroSection w-full text-white h-full mx-auto`} onLoad={() => {
            createStars(1, 20);
            createStars(2, 40);
            createStars(3, 30);
        }}>
        <div className='relative top-0 left-0 h-full w-[90%] mx-auto rounded-full z-0 overflow-hidden' id="stars">
            <div className='bg-repeat absolute animate-moveBackground bg-twinkling h-full w-[10000px] bg-1000 bg-transparent z-20'></div>
        </div>
            <div className='sm:px-20 px-10 absolute inset-0 z-20 top-[120px] w-full mx-auto flex flex-row items-start justify-center gap-5'>
                <div className='flex flex-col items-center mt-5'>
                    <div className='w-1 sm:h-40 h-40 lg:h-40 bg-green'></div>
                </div>
                <div className='text-center bg-black'>
                    <h1 className='font-opensans font-extrabold lg:text-[80px] sm:text-[45px] md:text-[50px] xs:text-[35px] xxxs:text-[28px] text-[35px] lg:leading-[98px] mt-2'>Hi, I am <span className='text-green'>Enos!</span></h1>
                    <p className='font-opensans select-none text-white font-normal xxxs:text-[15px] xs:text-[18px] sm:text-[25px] text-[23px] lg:leading-[40px]'>
                        I develop both Full Stack Web Apps with <span className='text-green'>React.js</span> and Cross platform Mobile Apps with <span className='text-green'>React Native.</span>  I also write confessional poetry and really love fashion.
                    </p>
                </div>
                <div className='flex flex-col items-center mt-5'>
                    <div className='w-1 sm:h-40 h-40 lg:h-40 bg-green'></div>
                </div>

            </div>

            <div className='flex w-full justify-center'>
                    <img className='absolute z-20 lg:top-[40%] md:top-[43%] sm:top-[45%] top-[48%] xs:top-[60%] xxs:top-[50%] xxxs:top-[70%] animate-astrobounce mask' src={astro} alt="A picture of an Astronaut"/>
                    <div className='absolute z-0 lg:top-[30%] md:top-[35%] sm:top-[40%] top-[38%] w-[400px] h-[300px]'></div>
            </div>

            <div className='absolute xxxs:bottom-10 s:bottom-14 xs:bottom-20 z-30 bottom-20 w-full flex justify-center items-center'>
                <a>
                    <div className='w-[50px] h-[50px] rounded-full border-4 border-white flex justify-center items-center p-2'>
                        <img className='animate-bounce' src={arrow} alt="an upward arrow"/>
                    </div>
                </a>

            </div>

            <div className='absolute font-bold md:bottom-10 bottom-5 z-30 text-green md:text-[15px] text-[10px] sm:px-16 px-6 w-fit flex justify-start items-center'>
                <span className='hover:opacity-50 active:opacity-25 cursor-pointer select-none' onClick={() => {
                    setVisible(!visible)
                }}>VIEW RESUME & CERTIFICATIONS</span>
            </div>


            <div className={`w-full h-[2000vh] top-0 bottom-0 left-0 right-0 backdrop-blur-md absolute z-50 flex justify-center p-20 ${visible ? "visible" : "hidden"}`}>
                <div className='relative xxxs:h-[70vh] xxxs:w-full xxs:h-[75vh] xxs:w-full ss:h-[70vh] sm:h-[85vh] h-[150vh] w-[80%] bg-black border-green border-2 rounded-xl'>
                    <div className='w-full h-[5%] flex justify-center items-center relative'>
                        <div className='w-[50%] h-full flex items-center justify-evenly'>
                            <span className={`font-opensans xxxs:text-[3px] xxs:text-[4px] xs:text-[5px] s:text-[10px] sm:text-[12px] lg:text-lg text-gray uppercase tracking-wider ${view === "Resume" ? "font-extrabold" : "font-thin"} hover:opacity-50 active:opacity-25 cursor-pointer select-none`} onClick={() => {
                                setView("Resume")
                            }}>View Resume</span>
                            <span className={`font-opensans xxxs:text-[3px] xxs:text-[4px] xs:text-[5px] s:text-[10px] sm:text-[12px] lg:text-lg text-gray uppercase tracking-wider ${view === "Certifications" ? "font-extrabold" : "font-thin"} hover:opacity-50 active:opacity-25 cursor-pointer select-none`} onClick={() => {
                                setView("Certifications")
                            }}>View Certifications</span>
                        </div>
                        <FontAwesomeIcon icon={faTimes} size="lg" color='white' className='absolute top-2 xxxs:right-2 right-5 hover:opacity-50 active:opacity-25 cursor-pointer' onClick={() => {
                            setVisible(!visible);
                        }}/>
                    </div>
                    <div className='absolute bottom-2 md:right-10 right-2 w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full border-[3px] border-white flex items-center justify-center'>
                        <FontAwesomeIcon icon={faChevronUp} size="lg" className='animate-bounce'/>
                    </div>
                    {view === "Resume" 
                    ?
                    <div className='w-full h-[90%] flex items-center justify-center'>
                        <img className='w-[95%] h-full object-contain' src={resume} alt="Enos's Resume"/>
                    </div>
                    :
                    <div className='w-full h-[90%] gap-5 flex flex-wrap items-center justify-center overflow-scroll'>
                        {certifications.map((certification, index) => (
                            <CertificationsComponent 
                                key={certification.id}
                                index={index}
                                {...certification}
                            />
                        ))}
                    </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Hero;
 
const certifications = [
    {
        id:1,
        image: javascriptCert,
    },
    {
        id:2,
        image: responsiveCert,
    },
]




