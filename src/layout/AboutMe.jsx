
function AboutMe() {
    return (
        <>
            <h1 className="py-5 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-950">About me</h1>

            <div className="bg-[#2c2c2c] rounded-2xl flex xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xl:gap-10 lg:gap-6 md:gap-10 sm:gap-4 xl:p-[40px] lg:p-[40px] md:p-[30px] sm:p-[15px] h-auto">
                <div className="xl:w-2/3 lg:w-2/3 md:w-full sm:w-full">
                    <p className="xl:text-xl lg:text-xl md:text-xl sm:text-lg">
                        I'm a happy and sociable person who enjoys being with everyone. I have a passion for computers and programming. Additionally, I like going out, watching football with my family and friends.
                    </p>
                    <div className="flex flex-col pt-10 xl:text-lg lg:text-lg md:text-lg sm:text-base">
                        <p><i className="fa-solid mr-3 fa-location-dot"></i> <b>Location:</b> Ha Dong, Ha Noi</p>
                        <p><i className="fa-solid mr-3 fa-flag"></i><b>Nationality:</b> Vietnamese</p>
                        <p><i className="fa-solid mr-3 fa-calendar"></i><b>Age:</b> 21</p>
                        <p><i className="fa-solid mr-1 fa-graduation-cap"></i><b>Study:</b> Posts and Telecommunications Institute of Technology (PTIT)</p>
                        <p><i className="fa-solid mr-2 fa-star"></i><b>Interests: </b>Music and Football </p>
                    </div>
                </div>
                <div className="bg-[url(/avaHung.jpg)] opacity-95 mx-auto bg-no-repeat bg-cover overflow-hidden rounded-full border xl:h-[350px] lg:h-[300px] md:h-[250px] sm:h-[150px] xl:w-[300px] lg:w-[300px] md:w-[250px] sm:w-[150px]">
                </div>
            </div>
        </>
    )
}

export default AboutMe
