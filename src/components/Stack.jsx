import { useEffect } from 'react';

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/reactjs.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import figma from "../assets/figma.png";
import express from "../assets/express.png";
import bootstrap from "../assets/bootstrap.png";
import jquery from "../assets/jquery.png";
import sass from "../assets/sass.png";
import threejs from "../assets/threejs.png";
import sql from "../assets/sql.png";
import firebase from "../assets/firebase.png";
import redux from "../assets/redux.png";
import python from "../assets/python.png";
import excel from "../assets/excel.png";
import canva from "../assets/canva.png";
import pages from "../assets/pages.png";
import notion from "../assets/notion.png";
import spring from "../assets/spring.png";

const Ball = (props) => {
    
    return (
        <div>
            <div className={`min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px] mt-5 hover:scale-125 hov ${props.class}`}>
                <img className='rounded-full object-cover p-2 border-5 border-white border-solid box' src={props.icon} />
                <div className='mt-3 text-center text-[10px] hide'>
                  <span className='font-thin font-opensans'>{props.name}</span>
                </div>
            </div>
        </div>
    )
}

const Stack = () => {
    const frameworks = [
        {
          name: "HTML 5",
          icon: html,
        },
        {
          name: "CSS 3",
          icon: css,
        },
        {
          name: "JavaScript",
          icon: javascript,
        },
        {
          name: "React JS",
          icon: reactjs,
        },
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
        {
          name: "Node JS",
          icon: nodejs,
        },
        {
          name: "MongoDB",
          icon: mongodb,
        },
        {
          name: "git",
          icon: git,
        },
        {
          name: "figma",
          icon: figma,
        },
        {
          name: "Express",
          icon: express,
        },
        {
          name: "BootStrap",
          icon: bootstrap,
        },
        {
          name: "jQuery",
          icon: jquery,
        },
        {
          name: "SASS",
          icon: sass,
        },
        {
          name: "ThreeJS",
          icon: threejs,
        },
        {
          name: "SQL",
          icon: sql,
        },
        {
          name: "Firebase",
          icon: firebase,
        },
        {
          name: "React Native",
          icon: reactjs,
        },
        {
          name: "Redux",
          icon: redux,
        },
        {
          name: "Python",
          icon: python,
        },
        {
          name: "Excel",
          icon: excel,
        },
        {
          name: "Canva",
          icon: canva,
        },
        {
          name: "Apple Pages",
          icon: pages,
        },
        {
          name: "Notion",
          icon: notion,
        },
        {
          name: "React Spring",
          icon: spring,
        },
      ];

      const hiddenElements = document.querySelectorAll(".stackshow");

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      });

      useEffect(() => {
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
          hiddenElements.forEach((el) => observer.unobserve(el));
        }
      }, [hiddenElements])

    return (
        <div className='text-white w-[65%] mx-auto flex flex-row flex-wrap justify-center gap-10'>
            <span className='w-full stackshow text-center mt-20 uppercase sm:px-16 px-6 sm:text-[18px] text-[14px] text-gray tracking-wider font-opensans font-thin'>This is my tech stack</span>
            {frameworks.map((framework, index) => (
                <Ball class={"stackshow"} key={index} index={index} {...framework}/>
            ))}
        </div>
    )
}

export default Stack;