import { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

import globe from  "../assets/globe.png";

const Contact = () => {
    const formRef = useRef();

    const [ loading, setLoading ] = useState(false);

    const [ form, setForm ] = useState({
        name:"",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({...form, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs.send("service_cqv2hro" ,"template_favsdyk" , {
        from_name: form.name,
        to_name: "Enos",
        from_email: form.email,
        to_email: "enos.nsambaj@gmail.com",
        message: form.message
        }, "hIZH6qsT5g-dLDhbS").then(() => {
            setLoading(false);
            alert("Thanks for reaching out, I will get back to you shortly!");

            setForm({
            name:"",
            email:"",
            message: ""
            })
        }, (error) => {
        setLoading(false)
        console.log(error)
        alert("Something went wrong.")
        })
    }

    const hiddenElements = document.querySelectorAll(".contactshow");

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
        <div className='w-full'>
            <div className='flex justify-center'>
                <div className='contactshow flex flex-col justify-center xl:justify-items-center xl:grid xl:grid-cols-3 items-center text-white mt-1 bg-black border-4 border-white rounded border-solid w-[80%] xl:w-[80%] xl:h-[270px] xl:py-0 py-2'>
                    <div className='relative h-[200px] xl:h-full xl:w-[98%] w-[98%] overflow-hidden'>
                        <img className='absolute w-[60%] xxxs:top-[100px] xxxs:right-[8rem] xs:top-[80px] sm:top-10 xl:top-32  xs:right-[10rem] s:right-[15rem] sm:right-[15rem] md:right-[20rem] lg:right-[28rem] xl:right-56 2xl:right-64 z-0' src={globe} alt="a picture of the planet"/>
                        <div className='relative flex w-full h-full justify-center items-center text-center '>
                            <h3 className='font-bold font-opensans md:text-[3rem] text-[2rem]'>CONTACT ME</h3>
                        </div>
                    </div>
                    <div className='border-white rounded border-2 border-solid h-[400px] xl:h-[96%] xl:w-[98%] w-[98%] xl:col-span-2'>
                        <form ref={formRef}
                            onSubmit={handleSubmit}
                            className="flex flex-col justify-center xl:grid xl:grid-cols-2 xl:items-center w-full h-full">
                            <div className='px-7'>
                                <label className='flex flex-col gap-2'>
                                    <span className='font-opensans font-bold'>Your Name</span>
                                    <input 
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="What is your Name?"
                                        className='bg-inherit px-2 py-2 placeholder:text-gray rounded outline-none border-solid border-2 border-white font-thin w-[99%]'
                                    />
                                </label>
                                <label className='flex flex-col gap-2'>
                                    <span className='font-opensans font-bold'>Your Email</span>
                                    <input 
                                        type="text"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="What is your email"
                                        className='bg-inherit px-2 py-2 placeholder:text-gray rounded outline-none border-solid border-2 border-white font-thin w-[99%]' 
                                    />
                                </label>
                            </div>
                            <div>
                                <label className='flex flex-col items-center gap-2'>
                                    <span className='font-opensans font-bold'>Your Message</span>
                                    <textarea 
                                        rows="5"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="What would you like for me to know?"
                                        className='bg-inherit py-2 resize-none px-2 placeholder:text-gray rounded outline-none border-solid border-2 border-white font-thin w-[99%]'
                                    />
                                </label>
                                
                                <div className="flex flex-col items-center">
                                    <button
                                        type="submit"
                                        className='w-[99%] uppercase hover:opacity-50 active:opacity-25 bg-green text-black rounded mt-2 font-bold font-mono text-[30px]'>
                                        {loading ? "Sending..." : "Send"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Contact;