import { useEffect } from "react";

import code from "../assets/code.svg";
import react from "../assets/react.svg";
import creative from "../assets/creative.svg";
import write from "../assets/write.svg";

const TitleCard = (props) => {

    return (
        <div className={`transition ease-in-out hover:scale-125 duration-300 z-30 p-[1px] bg-transparent py-5 px-12 min-h-[280px] w-[300px] flex justify-evenly items-center flex-col  title ${props.class}`}>
                    <img className="w-16 h-16 object-contain" src={props.icon} alt={props.title}/>
                    <h3 className="text-white text-[20px] font-bold text-center font-opensans">{props.title}</h3>
        </div>
    )
}

const About = () => {
    const titles = [
        {
          title: "Full Stack Developer",
          icon: code,
        },
        {
          title: "React Developer",
          icon: react,
        },
        {
          title: "Creative Coder",
          icon: creative,
        },
        {
          title: "Writer",
          icon: write,
        },
      ];

      const hiddenElements = document.querySelectorAll(".forshow");

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
        <div className="text-white z-40 mt-20">
            <div className="forshow">
                <p className="sm:px-16 px-6 sm:text-[18px] text-[14px] text-gray uppercase tracking-wider font-opensans font-thin">About Me</p>
                <h2 className="sm:px-16 px-6 text-white font-opensans font-bold uppercase md:text[60px] sm:text-[50px] xs:text-[35px] text-[30px]">An Introduction</h2>
            </div>

            <div className="forshow mt-5 text-[22px]  max-w-full leading-[30px] font-extralight sm:px-16 px-6">
              A motivated Full Stack Web Developer with a focus on user-friendly front-end design. Enos is open to rapid skill acquisition, has strong analytical skills, attention to detail, is highly creative and has a demonstrated ability to work in diverse teams in both a remote and office set up.
            </div>

            <div className="mt-20 flex flex-row flex-wrap gap-10 justify-center">
                {titles.map((title, index) => (
                    <TitleCard key={title.title} index={index} class={"forshow"} {...title}/>
                ))}
            </div>
        </div>
    )
}

export default About;