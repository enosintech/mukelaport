import { useEffect, useState } from 'react';
import blackhole from "../assets/blackhole.jpeg";

const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key='; 
const apiKey = 'SgxX6ChTJseeCpJdu8Wvr8orsddu2wFbhxIxYXFm';
const explanation = "The first black hole image, captured by the Event Horizon Telescope, revealed a bright ring-like structure surrounding a dark center, providing visual evidence of a supermassive black hole at the center of the M87 galaxy and confirming key aspects of Einstein's General Theory of Relativity."

const Space = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(baseUrl + apiKey)
        .then(response => response.json())
        .then(json => {
            setData(json)
        })
    }, [])

    const hiddenElements = document.querySelectorAll(".spaceshow");

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

    return(
        <div className='spaceshow h-screen w-full xl:mt-0 mt-20 flex justify-center items-center text-white'>
            <div className='border-4 border-solid border-white w-[80%] h-[80%] flex bg-stars flex-col gap-5 xl:grid xl:grid-cols-2 items-center px-1 py-1 overflow-auto rounded'>
                <div className='bg-black border-2 border-white border-solid h-[99%] w-[98%]'>
                    {data.media_type === "video" ? 
                    <iframe src={data.url} className="h-full w-full"  />
                    :
                    <a href={data.hdurl}><img className='h-full w-full' src={data.url ? data.url : blackhole} alt='Nasa Picture of the Day' /></a>
                    }
                </div>
                <div className='text-center mx-auto bg-black h-fit w-[90%]'>
                    <h3 className='font-bold font-opensans text-[1.5rem] uppercase'>{data.title ? data.title : "First Black Hole Image"}</h3>
                    <p className='font-thin font-opensans text-justify py-2'>{data.explanation ? data.explanation : explanation}</p>
                </div>
            </div>
        </div>
    )  
}

export default Space;