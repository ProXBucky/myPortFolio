import { Typewriter } from 'react-simple-typewriter'
function General() {


    return (
        <>
            <div className="bg-[url(/src/assets/img/back-beach.jpg)] bg-cover h-screen flex items-center justify-center xl:p-[250px] lg:p-[100px] md:p-[80px] sm:p-[20px]">
                <div className="flex flex-col gap-y-6 rounded-xl bg-gray-800/70 p-6 text-center shadow-lg">
                    <h1 className="xl:text-6xl lg:text-5xl md:text-6xl sm:text-3xl font-semibold">I'm Nguyen Viet Hung.</h1>
                    <h1 className="xl: text-4xl lg:text-4xl md:text-4xl sm:text-xl">
                        {' '}
                        <span style={{ color: 'white', fontWeight: 'bold' }}>
                            <Typewriter
                                words={['Intern web developer', 'I build web applications', `A final student in PTIT`, 'Intern Java developer']}
                                loop='0'
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={80}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className="xl:text-xl lg: text-xl md:text-xl sm:text-base">I'm a hard-working and self-taught student who is passionate about technology. I aspire to become a professional <b>Backend developer</b> after graduation. Furthermore, I aim to become a skilled <b>Fullstack developer</b> and a <b>Leader</b> in the future.</p>
                    <div className='flex flex-col'>
                        <p className='xl:text-lg lg:text-lg md:text-lg sm:text-md font-medium'><i class="fa-solid fa-phone"></i> 0834588225</p>
                        <p className='xl:text-lg lg:text-lg md:text-lg sm:text-md font-medium'><i class="fa-solid fa-envelope"></i> hungnguyenbn002@gmail.com</p>
                    </div>
                    <div className='flex justify-center gap-7'>
                        <a className="hover:opacity-80" href='https://www.facebook.com/vhungitptit' target='_blank'><i class="fa-brands fa-facebook fa-xl"></i></a>
                        <a className="hover:opacity-80" href='https://github.com/ProXBucky' target='_blank'><i class="fa-brands fa-github fa-xl"></i></a>
                        <a className="hover:opacity-80" href='https://www.linkedin.com/in/hungbn002' target='_blank'><i class="fa-brands fa-linkedin fa-xl"></i></a>
                    </div>

                    <a href="https://drive.google.com/file/d/1QTSiGD5RLr_TJQQ5YqT29yNqf1GWyAKi/view?usp=sharing" target='_blank'>
                        <button className='border-2 border-blue-600 xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-full text-md p-2 rounded-full mx-auto hover:opacity-70'>Download my CV <i class="fa-solid fa-download"></i></button>
                    </a>

                </div>

            </div >
        </>
    )
}

export default General
