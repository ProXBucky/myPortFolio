
function AboutMe() {
    return (
        <>
            <h1 className="py-5 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-950">About me</h1>

            <div className="bg-[#2c2c2c] rounded-2xl flex flex-row gap-20 p-[40px] h-[500px]">
                <div className="w-2/3">
                    <p className="text-xl">I'm a hard-working and self-taught student who is passionate about technology. I aspire to become a professional Backend developer after graduation. Furthermore, I aim to become a skilled Fullstack developer and a Leader in the future.</p>
                    <div className="flex flex-col pt-10 text-lg">

                        <p><i className="fa-solid fa-location-dot"></i> Location: Ha Dong, Ha Noi City</p>
                        <p><i className="fa-regular fa-flag"></i> Nationality: Vietnamese</p>
                        <p><i className="fa-regular fa-calendar"></i> Age: 20</p>
                        <p><i className="fa-solid fa-graduation-cap"></i> Study: Posts and Telecommunications Institute of Technology (PTIT)</p>
                        <p><i className="fa-regular fa-star"></i> Interests: Music and Football </p>
                        {/* </p> */}


                    </div>
                </div>

                <div className="bg-[url(/src/assets/img/bukcy.jpg)] bg-contain rounded-full h-[300px] w-[300px]">
                    {/* <div className="w-1/3 border bg-[url(/src/assets/img/ava-Hung.jpg)] bg-cover rounded-3xl"> */}
                    {/* <img src="" /> */}

                </div>

            </div>
        </>
    )
}

export default AboutMe
