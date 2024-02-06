import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faMedium, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

import daddysWebsite from "../assets/daddysWebsite.png";
import thfefmd from "../assets/thfefmd.png";
import pfmc from "../assets/pfmc.png";
import enosintech from "../assets/enosintech.png"
import ysgtmblog from "../assets/ysgtmblog.png";
import banturide from "../assets/banturide.jpeg";
import bright from "../assets/bright.jpeg";
import forchisanga from "../assets/forchisanga.png";
import spotifylite from "../assets/spotifylite.png";
import ramsprod from "../assets/ramsprod.png";

const ProjectCard = (props) => {
    return (
      <>
        <div className="h-[95%] md:min-w-[350px] md:max-w-[350px] min-w-[250px] max-w-[250px]  bg-white rounded-md shadow-2xl flex flex-col items-center">
          <div className="w-[90%] h-[10%] flex justify-center items-center">
            <h1 className="text-md md:text-xl truncate text-black font-opensans font-bold">{props.name}</h1>
          </div>
          <div className="w-[95%] h-[40%] border-[0.5px]">
            <img src={props.image} className="w-full h-full rounded-sm object-cover"/>
          </div>
          <div className="w-[95%] h-[40%]">
            <p className="px-3 w-full text-black text-center h-full py-3 overflow-auto font-light text-[14px] flex flex-col items-center">
              <span className="text-black font-bold uppercase">About the Project</span>
              {props.description}
            </p>
          </div>
          <div className="w-full h-[10%] overflow-hidden flex">
            <div className="w-[85%] h-full flex flex-col items-center py-2">
                <div className="text-black font-bold text-[14px]">
                  {props.responsive}
                </div>
            </div>
            <a href={props.link} target="_blank" className={`w-[35px] h-[35px] flex items-center shadow border-[0.5px] rounded-full justify-center ${props.link.length === 0 ? "pointer-events-none" : ""}`}>
              <FontAwesomeIcon icon={props.hosted ? faLink : faGithub} size="lg" color="black" className={`${props.link ? "opacity-100 cursor-pointer hover:opacity-50 active:opacity-25" : " opacity-25"}`}/>
            </a>
          </div>
        </div>
      </>
    )
}

const BookCard = (props) => {
  return (
    <>
      <div className="h-[95%] md:min-w-[350px] md:max-w-[350px] min-w-[250px] max-w-[250px]  bg-black border-2 border-white rounded-md shadow-2xl flex flex-col items-center">
        <div className="h-[85%] w-full flex flex-col justify-center items-center">
          <div className="h-[70%] mt-3 w-[50%] flex flex-col justify-center items-center">
            <img className="h-[80%] w-[60%] border-[0.5px] rounded object-cover" src={props.image}/>
            <h1 className="h-[20%] w-full text-center mt-2 md:text-[15px] text-[12px] font-bold font-opensans">{props.name}</h1>
          </div>
          <div className="mt-5 h-[30%] w-full overflow-auto px-3 text-[14px] text-center font-thin">
            <p>{props.description}</p>
          </div>
        </div>
        <div className="h-[15%] w-full border-t-[0.5px] flex items-center justify-between px-5">
          <div></div>
          <a target="_blank" className={`hover:opacity-50 active:opacity-25 cursor-pointer select-none ${props.link ? "" : "pointer-events-none"}`} href={props.link}>
            {props.link ?
              <FontAwesomeIcon icon={faLink} size="lg"/>
            :
             <></>
            }
          </a>
        </div>
      </div>
    </>
  )
}

const MediumCard = (props) => {
  return (
    <>
      <div className="h-[95%] md:min-w-[350px] md:max-w-[350px] min-w-[250px] max-w-[250px]  bg-white rounded-md shadow-2xl flex flex-col items-center">
        <div className="h-[85%] w-full flex items-center justify-center">
          <div className="h-[95%] w-[95%]">
            <h1 className="text-black w-full h-[40%] mt-5 text-center md:text-3xl text-xl font-opensans overflow-hidden">{props.title}</h1>
            <div className="h-[40%] w-full border border-black">
              <img className={`w-full h-full object-cover ${props.thumbnail ? "" : "bg-black"}`} src={props.thumbnail}/>
            </div>
            <div className="flex w-full h-[10%] justify-center">
              {props.categories.map((cate, index) => (
                <p key={index} className="h-full mt-1 text-md font-thin text-[10px] text-black overflow-auto">#{cate}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[15%] w-full flex border-t-[0.5px] border-black">
          <div className="w-[80%] h-full flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faMedium} size="md" color="black"/>
            <a href="https://medium.com/@enos.nsambaj" className="font-light md:text-[15px] text-[10px] font-opensans text-black">Medium: Enos Nsamba</a>
          </div>
          <div className="w-[20%] h-full flex justify-center items-center">
            <a href={props.link} target="_blank"><FontAwesomeIcon icon={faLink} size="lg" color="black"/></a>
          </div>
        </div>
      </div>
    </>
  )
}

const PoetryCard = (props) => {
  return (
    <>
      <div className="h-[95%] md:min-w-[350px] md:max-w-[350px] min-w-[250px] max-w-[250px]  bg-black border-2 border-white rounded-md shadow-2xl flex flex-col items-center">
        <div className="h-[85%] w-full p-5 flex flex-col items-center">
          <div className="w-[90%] h-[10%] flex justify-center items-center">
            <h1 className="text-md md:text-xl truncate font-opensans font-bold">{props.title}</h1>
          </div>
          <p className='h-[95%] w-full font-opensans text-justify font-thin md:text-[25px] text-[18px] overflow-scroll'>
            {props.description}
          </p>
        </div>
        <div className="h-[15%] w-full flex items-center justify-center">
          <a href="https://www.instagram.com/enos.poetry/" target="_blank" className="hover:opacity-50 active:opacity-25">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            <span className="font-light font-opensans"> enos.poetry</span>
          </a>
        </div>
      </div>
    </>
  )
}

const EmptyCard = (props) => {
  return (
    <>
      <div className="h-[95%] md:min-w-[350px] md:max-w-[350px] min-w-[250px] max-w-[250px] flex flex-col items-center justify-center">
        <span className="font-opensans font-semibold text-xl">{props.text}</span>
      </div>
    </>
  )
}

const Project = () => {

  const [ projects, setProjects ] = useState("Programming");
  const [ writing, setWriting ] = useState("Medium");
  const [ articles, setArticles ] = useState([]);

  const populateMedium = async () => {
    const req = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@enos.nsambaj")

    const data = await req.json()
    if(data.status === "ok"){
        setArticles(data.items)
    } else {
        alert(data.error)
    }
  } 

  const hiddenElements = document.querySelectorAll(".projectshow");

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

  useEffect(() => {
    populateMedium();
  }, [])
  
    return (
        <div className="text-white mt-40">
            <div>
                <p className="projectshow sm:px-16 px-6 sm:text-[18px] text-[14px] text-center text-gray uppercase tracking-wider font-opensans font-bold">My Work</p>
            </div>

            <div>
              <p className="projectshow sm:px-16 px-6 sm:text-[15px] text-[13px] text-center text-gray font-thin font-opensans mt-5 tracking-wider">I take pride in my work. I always make sure to enjoy whatever it is that I am doing and I try to fully give myself to it. Here you will find my programming and writing projects.</p>
            </div>

            <div className="mt-12 h-[50px] w-full flex justify-center">
              <div className="projectshow border w-[60%] h-[90%] rounded-full flex">
                <div className="border-[0.25px] rounded-tl-full rounded-bl-full w-[50%] h-full flex items-center justify-center">
                  <h1 className={`font-opensans hover:opacity-50 active:opacity-25 xxxs:text-[8px] xxs:text-[12px] text-[18px] ${projects === "Programming" ? "font-bold" : "font-thin"} cursor-pointer select-none`} onClick={() => {
                    setProjects("Programming")
                  }}>Programming</h1>
                </div>
                <div className="border-[0.25px] rounded-tr-full rounded-br-full w-[50%] h-full flex items-center justify-center" onClick={() => {
                  setProjects("Writing")
                }}>
                  <h1 className={`font-opensans hover:opacity-50 active:opacity-25 xxxs:text-[8px] xxs:text-[12px] text-[18px] ${projects === "Writing" ? "font-bold" : "font-thin"} cursor-pointer select-none`}>Writing</h1>
                </div>
              </div>
            </div>

            <div className="projectshow mt-10 h-[100vh] projectCard w-full">
                {projects === "Programming" ? 
                  <div className="h-full w-full bg-black flex flex-col items-center justify-center">
                    <h1 className="font-opensans uppercase text-gray tracking-wider font-semibold">Projects</h1>
                    <div className="relative h-[80%] mt-5 w-[90%] bg-black rounded flex flex-col items-center justify-center">
                      <Swiper
                        className="h-[80%] w-full bg-stars"
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={window.innerWidth < 900 ? "1" : "3"}
                        coverFlowEffect={{
                          rotate: 0,
                          stretch: 0,
                          depth: 1000,
                          modifier: 2.5
                        }}  
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        pagination={{el: ".swiper-pagination", clickable: true}}
                        navigation={{
                          nextEl: ".swiper-button-next",
                          prevEl:".swiper-button-prev",
                          clickable: true,
                        }}
                      >
                        {codingProjects.map((project, index) => (
                        <SwiperSlide>
                          <ProjectCard 
                            key={project.id}
                            index={index}
                            {...project}
                          />
                        </SwiperSlide>
                        ))
                        }
                      </Swiper>
                      <div className="relative slider-controller h-[10%] mt-5 md:w-[60%] lg:w-[40%] xl:w-[30%] sm:w-[80%] w-full flex justify-center">
                          <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="chevron-back"></ion-icon>
                          </div>
                          <div className="swiper-button-next slider-arrow ">
                            <ion-icon name="chevron-forward"></ion-icon>
                          </div>
                          <div className="swiper-pagination relative bottom-7"></div>
                      </div>
                    </div>
                  </div> 
                  :
                  <div className="h-full w-full flex flex-col justify-center items-center">
                        <div className="w-[80%] h-[8%] flex items-center justify-evenly">
                           <h1 className={`text-gray uppercase tracking-wider font-opensans ${writing === "Books" ? "font-extrabold" : "font-thin"} hover:opacity-50 active:opacity-25 cursor-pointer select-none`} onClick={() => {
                            setWriting("Books")
                           }}>BOOKS</h1>
                           <h1 className={`text-gray uppercase tracking-wider font-opensans ${writing === "Medium" ? "font-extrabold" : "font-thin"} hover:opacity-50 active:opacity-25 cursor-pointer select-none`} onClick={() => {
                            setWriting("Medium")
                           }}>MEDIUM</h1>
                           <h1 className={`text-gray uppercase tracking-wider font-opensans ${writing === "Poetry" ? "font-extrabold" : "font-thin"} hover:opacity-50 active:opacity-25 cursor-pointer select-none`} onClick={() => {
                            setWriting("Poetry")
                           }}>POETRY</h1>
                        </div>
                        {
                          writing === "Books" 
                          ? 
                          <div className="w-full h-full bg-black flex flex-col items-center justify-center">
                            <div className="relative h-[80%] mt-5 w-[75%] bg-black rounded flex flex-col items-center justify-center">
                              <Swiper
                                className="h-[90%] w-full bg-stars"
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                loop={true}
                                slidesPerView={'3'}
                                coverFlowEffect={{
                                  rotate: 0,
                                  stretch: 0,
                                  depth: 1000,
                                  modifier: 2.5
                                }}  
                                modules={[EffectCoverflow, Pagination, Navigation]}
                                pagination={{el: ".swiper-pagination", clickable: true}}
                                navigation={{
                                  nextEl: ".swiper-button-next",
                                  prevEl:".swiper-button-prev",
                                  clickable: true,
                                }}
                              >
                                {writingProjects.map((book, index) => (
                                <SwiperSlide>
                                  <BookCard 
                                    key={book.id}
                                    index={index}
                                    {...book}
                                  />
                                </SwiperSlide>
                                ))
                                }
                              </Swiper>
                              <div className="relative slider-controller h-[10%] mt-5 md:w-[60%] lg:w-[40%] xl:w-[30%] sm:w-[80%] w-full flex justify-center">
                                  <div className="swiper-button-prev slider-arrow">
                                    <ion-icon name="chevron-back"></ion-icon>
                                  </div>
                                  <div className="swiper-button-next slider-arrow ">
                                    <ion-icon name="chevron-forward"></ion-icon>
                                  </div>
                                  <div className="swiper-pagination relative bottom-6"></div>
                              </div>
                            </div>
                          </div>
                          :
                          writing === "Medium"
                          ?
                          <div className="w-full h-full bg-black flex flex-col items-center justify-center">
                          <div className="relative h-[80%] mt-5 w-[75%] bg-black rounded flex flex-col items-center justify-center">
                              <Swiper
                                className="h-[90%] w-full bg-stars"
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                loop={true}
                                slidesPerView={'3'}
                                coverFlowEffect={{
                                  rotate: 0,
                                  stretch: 0,
                                  depth: 1000,
                                  modifier: 2.5
                                }}  
                                modules={[EffectCoverflow, Pagination, Navigation]}
                                pagination={{el: ".swiper-pagination", clickable: true}}
                                navigation={{
                                  nextEl: ".swiper-button-next",
                                  prevEl:".swiper-button-prev",
                                  clickable: true,
                                }}
                              >
                                {articles.length > 0 
                                ?
                                  articles.map((article, index) => (
                                    <SwiperSlide>
                                      <MediumCard 
                                        key={article.title}
                                        index={index}
                                        {...article}
                                      />
                                    </SwiperSlide>
                                    ))
                                :
                                  <SwiperSlide>
                                    <EmptyCard text="Please Check Your Internet Connection"/>
                                  </SwiperSlide>
                                }
                              </Swiper>
                              <div className="relative slider-controller h-[10%] mt-5 md:w-[60%] lg:w-[40%] xl:w-[30%] sm:w-[80%] w-full flex justify-center">
                                  <div className="swiper-button-prev slider-arrow">
                                    <ion-icon name="chevron-back"></ion-icon>
                                  </div>
                                  <div className="swiper-button-next slider-arrow ">
                                    <ion-icon name="chevron-forward"></ion-icon>
                                  </div>
                                  <div className="swiper-pagination relative bottom-6"></div>
                              </div>
                            </div>
                          </div>
                          :
                          <div className="w-full h-full bg-black flex flex-col items-center justify-center">
                          <div className="relative h-[80%] mt-5 w-[75%] bg-black rounded flex flex-col items-center justify-center">
                              <Swiper
                                className="h-[90%] w-full bg-stars"
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                loop={true}
                                slidesPerView={'3'}
                                coverFlowEffect={{
                                  rotate: 0,
                                  stretch: 0,
                                  depth: 1000,
                                  modifier: 2.5
                                }}  
                                modules={[EffectCoverflow, Pagination, Navigation]}
                                pagination={{el: ".swiper-pagination", clickable: true}}
                                navigation={{
                                  nextEl: ".swiper-button-next",
                                  prevEl:".swiper-button-prev",
                                  clickable: true,
                                }}
                              >
                                {poems.map((poem, index) => (
                                <SwiperSlide>
                                  <PoetryCard 
                                    key={poem.id}
                                    index={index}
                                    {...poem}
                                  />
                                </SwiperSlide>
                                ))
                                }
                              </Swiper>
                              <div className="relative slider-controller h-[10%] mt-5 md:w-[60%] lg:w-[40%] xl:w-[30%] sm:w-[80%] w-full flex justify-center">
                                  <div className="swiper-button-prev slider-arrow">
                                    <ion-icon name="chevron-back"></ion-icon>
                                  </div>
                                  <div className="swiper-button-next slider-arrow ">
                                    <ion-icon name="chevron-forward"></ion-icon>
                                  </div>
                                  <div className="swiper-pagination relative bottom-6"></div>
                              </div>
                            </div>
                          </div>
                        }
                  </div>
                }
            </div>
        </div>
    )
}

export default Project;

const writingProjects = [
  {
    id: 1,
    name: "Pictures From My Couch",
    description:
      "A part of me will always stay. Pictures from my couch is special to me, and as such it is a private book and no link is provided. A passion project that I worked on and stayed consistent to working on for a year. In this book are memories that cannot be bought. Not here with money or anything I desire. A lot I desire is in here.",
    image: pfmc,
    link: "",
  },
  {
    id: 2,
      name: "To Heaven From Earth for My dad",
      description:
        "a book I wrote in honor of my late fathers memorial. This book explore grief and the painstaking loss of a parent as an adult. I wrote this book as a symbolic message to my dad and to all dads.",
      image: thfefmd,
      link: "https://xmueducn-my.sharepoint.com/:b:/g/personal/dmt1809863_xmu_edu_my/EfwxOtlqlFNMojcrkcHxsv0BzjXueKCLjWVEIo9Z7qnmKQ?e=thzb6n",
  },
];

const poems = [
  {
    id: 1,
    title: "The Mind, A Mine",
    description: "Out of my head as quick as it came, the chaos of a thought, like a flame. A quiet potential to maul, to kill things dead, to devour, to destroy, to create, to raise, to nurture, the mind, a mine. Perhaps a mind will kill me before anything else. Or rather after everythign else. Some day, long after I am gone, I will be thought of for the last time ever. That day I will truly die, murdered by the mind. For if nodoby remembers me, how can I exist? But then again, shakespeare says in his 18th sonnet that so long as men can live and so long as eyes can see, so long lives this and this gives life to thee. Therefore, as long as I write and for as long as man can read, my life, mine. Immortalised, no decay, these writings, an embalming of my past existence, My mind, mine."
  }, 
  {
    id: 2,
    title: "Anything Constant Ceases to Exist",
    description: "A lot of my lifestyle has become metaphorical. A lot of my lifestyle serves as a symbol for unknown feelings. Each day I come back to me, a victim of a life I have claimed as mine. Sometimes to run dead means to blind and along with everything you have learnt from fear. It is okay to wonder just how fast your heart can beat or your legs exchange balance. Fear is quite the teacher I say. I haven't had to run away from anything in a while. And I mean physically run. Last time I did it was from dogs I think. These days only people get me to full speed, some towards and others away. ",
  }, 
  {
    id: 3,
    title: "Notes on Healing",
    description: "Healing begins the moment the damage is done, you might never feel it, but each day you are slowly coming together, each day you are less broken than the day before. There will be other days when you will break, some days your might even die, but I promise you that they will pass. Just as you dance in beauty, you must also dance in pain. It's lifes way of keeping everything sexy." ,
  }, 
  {
    id: 4,
    title: "Untitled 01",
    description: "I can never speak this poetry that I feel, the one that draws me to sunsets and different shades of blue. I want stars and endless nights to watch them. To find a home for my soul where it can jump out of this body it is enclosed in so it may dance with the spirits of all that I have loved and fly without wings across the midnight marsh. This is what my soul wants.",
  }, 
  {
    id: 5,
    title: "Moving On",
    description: "Oh but I cannot be hurt, my father stole my heart and died. My own feet mvoe forward aggressively and regardless of me. Options are at a premium when it is life that decides it is time to move on. Sometimes you pick the hobby first and then you learn to like it.",
  }, 
]

const codingProjects = [
  {
    id: 1,
    name: "EnosInTech",
    description:
      "Enos in Tech is this very portfolio website that you are currently using. I built this website as a portfolio to demonstrate not only my portfolio design and development skills, but also my other projects that I have worked on and that I am currently working on. This portfolio is static and is built using only ReactJS. The only functionality in this portfolio is the contact me section in which I use Email JS as the Email backend service.",
    link: "https://www.enosintech.onrender.com",  
    responsive: "Fully Responsive",
    hosted: true,
    image: enosintech,
  },
  {
    id: 2,
    name: "You Seem Good To Me",
    description:
      "You seem Good to Me is an upcoming brand that I am currently working on based on self acceptance. The website is currently in the final stages of development and once complete, will be a website where users can visit and view blog articles that I will be writing. Users can also find other self acceptance resources on the page. The website is built using the Mern Stack. That is, MongoDB for data persistency, Express for serving, React for the frontend and Node JS for the backend. Other frameworks that this website uses are Redux for State Management and Three JS for 3D rendering.",
    link: "https://enosintech.github.io/",  
    responsive: "Fully Responsive",
    hosted: false,
    image: ysgtmblog,
  },
  {
    id: 3,
    name: "BantuRide",
    description:
      "A soon to launch ride share application based in Zambia. BantuRide is a mobile application where users can book ehailing rides from one place to another. It is built for both Android and IOS platform using React Native. BantuRide is a project I worked on with two other people in which I was responsible for mostly front end development.",
    link: "",  
    responsive: "Fully Mobile Responsive",
    hosted: false,
    image: banturide,
  },
  {
    id: 4,
    name: "Bright",
    description:
      "A project I developed as a final year project and that I one day hope to deploy to production, Bright is a wellness application focused on human moods. It does this by allowing users to connect with other users feeling a similar way over the application. Bright was built using React Native and Firebase.",
    link: "",  
    responsive: "Semi Mobile Responsive",
    hosted: false,
    image: bright,
  },
  {
    id: 5,
    name: "Online Tombstone: For Enos",
    description:
      "A website that I developed and dedicated to my late father. On this website you will find a gallery of different pictures from over the years. You will also find information about what a lovely man my father was. Be extra careful though, it always sucks to find out he existed and that you did not know him.",
    link: "https://enosintech.github.io/enosarthurnsamba/",  
    responsive: "Non-Responsive",
    hosted: true,
    image: daddysWebsite,
  },
  {
    id: 6,
    name: "For Chisanga",
    description:
      "I built this website when working as a freelance developer in lusaka. My client was my friend and he wanted the project for his girlfriends birthday. The project was built with the Mern Stack. Mongo DB as a database, Express for the server, React for the frontend and node for backend.",
    link: "https://forchisanga.onrender.com/",   
    responsive: "Fully Responsive",
    hosted: true,
    image: forchisanga,
  },
  {
    id: 7,
    name: "Spotify Light Mode",
    description:
      "A frontend project I worked on where I redesigned the Spotify Desktop Application to give it a Light Mode and arguably better icons. This project was done in ReactJS.",
    link: "",  
    responsive: "Partially Responsive",
    hosted: false,
    image: spotifylite,
  },
];