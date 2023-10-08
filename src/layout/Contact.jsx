
function Contact({ scrollTop }) {


    return (
        <div className="relative">
            <h1 className="py-5 pt-32 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-950">Contact</h1>
            <div className="bg-[url(/src/assets/Map.jpg)] opacity-80 bg-no-repeat bg-cover rounded-xl xl:h-[400px] lg:h-[400px] md:h-[350px] sm:h-[200px] w-full">
            </div>
            <div className="py-10 flex flex-col">
                <p className="text-lg pb-3">I'd love to hear from you, give me a shout by email or facebook or phone if you'd like to get in contact with me.</p>
                <div className='flex flex-col gap-1'>
                    <p className='xl:text-lg lg:text-lg md:text-lg sm:text-base font-medium hover:opacity-80 xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-full'><i class="fa-solid fa-phone fa-lg mr-2"></i> 0834588225</p>
                    <p className='xl:text-lg lg:text-lg md:text-lg sm:text-base font-medium hover:opacity-80 xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-full'><i class="fa-solid fa-envelope fa-lg mr-2"></i> hungnguyenbn002@gmail.com</p>
                    <a className="xl:text-lg lg:text-lg md:text-lg sm:text-base font-medium hover:opacity-80 xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-full" href='https://www.facebook.com/vhungitptit' target='_blank'><i class="fa-brands fa-facebook fa-lg mr-3"></i>Viet Hung</a>
                    <a className="xl:text-lg lg:text-lg md:text-lg sm:text-base font-medium hover:opacity-80 xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-full" href='https://github.com/ProXBucky' target='_blank'><i class="fa-brands fa-github fa-lg mr-3"></i>ProXBucky</a>
                    <a className="xl:text-lg lg:text-lg md:text-lg sm:text-base font-medium hover:opacity-80 xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-full" href='https://www.linkedin.com/in/proxbucky' target='_blank'><i class="fa-brands fa-linkedin fa-lg mr-3"></i>Viet Hung Nguyen</a>
                </div>


            </div>
            <div className="absolute flex justify-center items-center xl:bottom-[-8%] lg:bottom-[-6%] md:bottom-[-5%] sm:bottom-[-5%] xl:right-[48%] lg:right-[47%] md:right-[46.5%] sm:right-[44%] rounded-full h-12 w-12 bg-white cursor-pointer" onClick={scrollTop}>
                <i class="fa-solid fa-chevron-up fa-xl text-black"></i>
            </div>
        </div>
    )
}

export default Contact
