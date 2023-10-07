
function AboutMe() {
    return (
        <>
            <h1 className="py-5 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-950">About me</h1>

            <div className="bg-[#2c2c2c] rounded-2xl flex flex-row gap-20 p-[40px] h-auto">
                <div className="w-2/3">
                    <p className="text-xl">
                        I'm a happy and sociable person who enjoys being with everyone. I have a passion for computers and programming. Additionally, I like going out, watching football with my family and friends.
                    </p>
                    <div className="flex flex-col pt-10 text-lg">
                        <p><i className="fa-solid mr-3 fa-location-dot"></i> <b>Location:</b> Ha Dong, Ha Noi City</p>
                        <p><i className="fa-solid mr-3 fa-flag"></i><b>Nationality:</b> Vietnamese</p>
                        <p><i className="fa-solid mr-3 fa-calendar"></i><b>Age:</b> 20</p>
                        <p><i className="fa-solid mr-1 fa-graduation-cap"></i><b>Study:</b> Posts and Telecommunications Institute of Technology (PTIT)</p>
                        <p><i className="fa-solid mr-2 fa-star"></i><b>Interests: </b>Music and Football </p>
                    </div>
                </div>
                <div className="bg-[url(/src/assets/img/bukcy.jpg)] bg-contain rounded-full h-[300px] w-[300px]">
                </div>
            </div>
        </>
    )
}

export default AboutMe
