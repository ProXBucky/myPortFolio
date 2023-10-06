import { Typewriter } from 'react-simple-typewriter'
function General() {
    return (
        <>
            <div className="bg-[url(/src/assets/img/back-beach.jpg)] bg-cover h-screen flex items-center justify-center p-[350px]">
                <div className="flex flex-col gap-y-6 rounded-xl bg-gray-800/70 p-6 text-center shadow-lg">
                    <h1 className="text-6xl font-semibold">I'm Viet Hung.</h1>
                    <h1 className="text-4xl">
                        {' '}
                        <span style={{ color: 'white', fontWeight: 'bold' }}>
                            <Typewriter
                                words={['Intern web developer', 'I build web applications', `A third-year student in PTIT`]}
                                loop='0'
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={80}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className="text-xl">I'm a hard-working and self-taught student who is passionate about technology. I aspire to become a professional <b>Backend developer</b> after graduation. Furthermore, I aim to become a skilled <b>Fullstack developer</b> and a <b>Leader</b> in the future.</p>
                    <div className='flex flex-col'>
                        <p className='text-md font-medium'><i class="fa-solid fa-phone"></i> 0834588225</p>
                        <p className='text-md font-medium'><i class="fa-solid fa-envelope"></i> hungnguyenbn002@gmail.com</p>
                    </div>
                    <div className='flex justify-center gap-7'>
                        <a href='https://www.facebook.com/vhungitptit' target='_blank'><i class="fa-brands fa-facebook fa-xl"></i></a>
                        <a href='https://github.com/ProXBucky' target='_blank'><i class="fa-brands fa-github fa-xl"></i></a>
                        <a href='https://www.linkedin.com/in/proxbucky' target='_blank'><i class="fa-brands fa-linkedin fa-xl"></i></a>
                    </div>
                    <button className='border-2 w-1/4 text-lg p-2 rounded-full mx-auto'>Resume <i class="fa-solid fa-download"></i></button>

                </div>

            </div >
        </>
    )
}

export default General
