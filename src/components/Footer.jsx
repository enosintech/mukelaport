const Footer = () => {
    const year = new Date().getFullYear();

    return ( 
        <div className='relative mt-5 text-white w-full h-[40px]'>
            <div className='absolute w-full h-full'></div>
            <div className='absolute w-full h-full bg-green mask2'></div>
            <h3 className='absolute bottom-2 left-2 text-black font-light text-[10px]'>{year} BY ENOS NSAMBA©</h3>
        </div>
    )
}

export default Footer;

