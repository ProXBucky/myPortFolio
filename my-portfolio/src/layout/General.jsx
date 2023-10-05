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
                                words={['Intern web developer', 'I build web applications', `I'm a third-year student in PTIT Viet Nam`]}
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
                </div>

            </div >
        </>
    )
}

export default General
