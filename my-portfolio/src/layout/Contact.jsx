
function Contact({scrollTop}) {


    return (
        <div className="relative">
            <h1 className="py-5 pt-32 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-950">Contact</h1>
            <div className="bg-[url(/src/assets/Map.jpg)] opacity-60 bg-no-repeat bg-cover rounded-xl h-[400px] w-full">
            </div>
            <div className="py-10 flex flex-col">
                <p className="text-md pb-3">I'd love to hear from you, give me a shout by email or by using the form below if you'd like to get in contact with me.</p>
                <div className='flex flex-col gap-1'>
                    <p className='text-md font-medium hover:opacity-80 w-3/5'><i class="fa-solid fa-phone fa-lg mr-2"></i> 0834588225</p>
                    <p className='text-md font-medium hover:opacity-80 w-3/5'><i class="fa-solid fa-envelope fa-lg mr-2"></i> hungnguyenbn002@gmail.com</p>
                    <a className="text-md font-medium hover:opacity-80 w-3/5" href='https://www.facebook.com/vhungitptit' target='_blank'><i class="fa-brands fa-facebook fa-lg mr-3"></i>Viet Hung</a>
                    <a className="text-md font-medium hover:opacity-80 w-3/5" href='https://github.com/ProXBucky' target='_blank'><i class="fa-brands fa-github fa-lg mr-3"></i>ProXBucky</a>
                    <a className="text-md font-medium hover:opacity-80 w-3/5" href='https://www.linkedin.com/in/proxbucky' target='_blank'><i class="fa-brands fa-linkedin fa-lg mr-3"></i>Viet Hung Nguyen</a>
                </div>


            </div>
            <div className="absolute flex justify-center items-center bottom-[-8%] right-[48%] rounded-full h-12 w-12 bg-white cursor-pointer" onClick={scrollTop}>
                <i class="fa-solid fa-chevron-up fa-xl text-black"></i>
            </div>
        </div>
    )
}

export default Contact
