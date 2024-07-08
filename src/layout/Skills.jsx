import { logoSkillFront } from "../adminData"
import { logoSkillBack } from "../adminData"
import { logoSkillOther } from "../adminData"
function Skills() {
    return (
        <>
            <h1 className="py-5 pt-32 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-950">Skills</h1>
            <div className="bg-[#2c2c2c] rounded-2xl flex flex-col xl:gap-20 lg:gap-20 md:gap-10 sm:gap-5 p-[40px] text-center">
                <div className="w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col">
                    <div className="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full py-5 xl:px-10 lg:px-10 md:px-8 sm:px-6 xl:border-r-[1px] lg:border-r-[1px]">
                        <h1 className="text-2xl font-semibold pb-5">Frontend</h1>
                        <div className="flex flex-wrap justify-around gap-10">
                            {
                                logoSkillFront && logoSkillFront.length > 0 &&
                                logoSkillFront.map((item, index) => {
                                    return (
                                        <div className="xl:h-20 lg:h-20 md:h-20 sm:h-14 xl:w-20 lg:w-20 md:w-20 sm:w-14 flex flex-col p-2 cursor-pointer" key={index}>
                                            <img src={item.link} alt={item.name} className="animate-logo-spin xl:h-20 lg:h-20 md:h-20 sm:h-14 xl:w-20 lg:w-20 md:w-20 sm:w-14" />
                                            <p>{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full py-5 xl:px-10 lg:px-10 md:px-8 sm:px-6 md:mt-6 sm:mt-6">
                        <h1 className="text-2xl font-semibold pb-5">Backend</h1>
                        <div className="flex flex-wrap justify-around gap-10">
                            {
                                logoSkillBack && logoSkillBack.length > 0 &&
                                logoSkillBack.map((item, index) => {
                                    return (
                                        <div className="xl:h-20 lg:h-20 md:h-20 sm:h-14 xl:w-20 lg:w-20 md:w-20 sm:w-14 flex flex-col p-2 cursor-pointer" key={index}>
                                            <img src={item.link} alt={item.name} className="animate-logo-spin xl:h-20 lg:h-20 md:h-20 sm:h-14 xl:w-20 lg:w-20 md:w-20 sm:w-14" />
                                            <p>{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="xl:w-2/3 lg:w-2/3 md:w-full sm:w-full mx-auto py-5 xl:px-10 lg:px-10 md:px-8 sm:px-6">
                    <h1 className="text-2xl font-semibold pb-5">Other</h1>
                    <div className="flex flex-wrap justify-around gap-10">
                        {
                            logoSkillOther && logoSkillOther.length > 0 &&
                            logoSkillOther.map((item, index) => {
                                return (
                                    <div className="xl:h-20 lg:h-20 md:h-20 sm:h-14 xl:w-20 lg:w-20 md:w-20 sm:w-14 flex flex-col p-2 cursor-pointer" key={index}>
                                        <img src={item.link} alt={item.name} className="animate-logo-spin xl:h-22 lg:h-20 md:h-20 sm:h-14 xl:w-20 lg:w-20 md:w-20 sm:w-14" />
                                        <p>{item.name}</p>
                                    </div>
                                )
                            })
                        }

                    </div>


                </div>

            </div>
        </>
    )
}

export default Skills
