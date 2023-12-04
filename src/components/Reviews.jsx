import { useEffect } from 'react';

import enos from "../assets/enos.jpeg";
import avatar from "../assets/placeholdderavatar.png";

const ReviewCard = (props) => {
    return (
      <div className='md:h-[95%] h-[99%] min-w-full md:min-w-[350px] w-full bg-black border-[0.25px] border-white rounded-md shadow-2xl'>
          <div className='h-[80%] w-full p-5'>
            <p className='h-[85%] w-full font-opensans font-thin md:text-[25px] text-[18px] overflow-scroll'>
              {props.testimonial}
            </p>
            <span className='text-lg font-thin w-full h-[15%] italic flex justify-end mt-2 text-gray'>- {props.date}</span>
          </div>
          <div className='h-[20%] w-full flex flex-row px-5 items-center border-t-[0.25px]'>
            <img src={props.image ? props.image : avatar} className='h-[50px] w-[50px] rounded-full object-cover border border-white border-solid' alt='' />
            <div className='ml-3 font-opensans md:text-[15px] text-[10px]'>
              <h1 className='font-bold'>{props.name}</h1>
              <span className='font-bold'>{props.designation}</span>
              <span className='font-thin'> of </span>
              <span>{props.company}</span>
            </div>
          </div>
      </div>
    )
}

const Reviews = () => {
  
  const hiddenElements = document.querySelectorAll(".reviewshow");

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
        <div className='text-white mt-40 w-full h-screen reviewCard'>
            <div className='reviewshow h-[10%]'>
                <h2 className='mt-3 text-center sm:px-16 px-6 text-white font-opensans font-bold uppercase md:text[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>the voices of other people</h2>
            </div>

            <div className='reviewshow mx-auto mt-16 border-white border-4 border-solid w-[80%] xl:h-[60%] h-[90%] rounded flex xl:flex-row flex-col'>
              <div className='xl:h-full h-[50%] xl:w-[30%] w-full flex justify-center items-center'>
                  <div className='flex flex-col items-center p-10'>
                    <img className='sm:h-[120px] h-[80px] sm:w-[120px] w-[80px] rounded-full border-2 border-solid border-white object-cover' src={enos} alt='Enos'/>
                    <h1 className='mt-5 font-opensans font-bold text-[20px] sm:text-[25px]'>Enos Nsamba</h1>
                    <span className='mt-5 text-center font-opensans xxxs:text-[8px] xxs:text-[10px] xs:text-[12px] s:text-[14px] md:text-[15px] text-[15px] font-thin w-1/2'>I think I am a good developer and person, but do not take my word for it, here is what everyone else says.</span>
                  </div>
              </div>
              <div className='xl:h-full h-[50%] xl:w-[70%] w-full flex items-center justify-center overflow-auto'>
                <div className='md:h-[98%] h-full w-[99%] rounded flex flex-row gap-20 items-center overflow-scroll bg-stars md:pr-20 md:pl-20'>
                    {reviews.map((testimonial, index) => (
                      <ReviewCard 
                        key={testimonial.name}
                        index={index}
                        {...testimonial}
                      />
                    ))
                    }
                </div>
              </div>
            </div>
        </div>
    )
}

export default Reviews;

const reviews = [
  {
    testimonial: "Overall, Enos has done great work and has really impressed me with his ability to complete tasks under minimum supervision. He is definitely someone who can work from home and with an English-speaking employer. My only suggestion for him is to try and gain more work experience so that he can expand his skillsets more.",
    name: "Haris Nabil",
    designation: "HR Manager",
    company: "Fresh Futures Australia",
    date: "July, 2022"
  },
  {
    testimonial: "Overall, Enos has done great work and has really impressed me with his ability to complete tasks under minimum supervision. He is definitely someone who can work from home and with an English-speaking employer. My only suggestion for him is to try and gain more work experience so that he can expand his skillsets more.",
    name: "Shikayuni Chilukutu",
    designation: "HR Manager",
    company: "Fresh Futures Australia",
    date: "December, 2023"
  },
];