import { logoSkillFront } from "../adminData"
import { logoSkillBack } from "../adminData"
import { logoSkillOther } from "../adminData"
function Skills() {
    return (
        <>
            <h1 className="py-5 pt-32 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-950">Skills</h1>
            <div className="bg-[#2c2c2c] rounded-2xl flex flex-col gap-20 p-[40px] text-center">
                <div className="w-full flex flex-row">
                    <div className="w-1/2 py-5 px-10 border-r-[1px]">
                        <h1 className="text-2xl font-semibold pb-5">Frontend</h1>
                        <div className="flex flex-wrap justify-around gap-10">
                            {
                                logoSkillFront && logoSkillFront.length > 0 &&
                                logoSkillFront.map((item, index) => {
                                    return (
                                        <div className="h-20 w-20 flex flex-col p-2" key={index}>
                                            <img src={item.link} alt={item.name} className="animate-logo-spin" />
                                            <p className="h-2/6">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="w-1/2 py-5 px-10">
                        <h1 className="text-2xl font-semibold pb-5">Backend</h1>
                        <div className="flex flex-wrap justify-around gap-10">
                            {
                                logoSkillBack && logoSkillBack.length > 0 &&
                                logoSkillBack.map((item, index) => {
                                    return (
                                        <div className="h-20 w-20 flex flex-col p-2" key={index}>
                                            <img src={item.link} alt={item.name} className="animate-logo-spin" />
                                            <p className="h-2/6">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="w-2/3 mx-auto py-5 px-10">
                    <h1 className="text-2xl font-semibold pb-5">Other</h1>
                    <div className="flex flex-wrap justify-around gap-10">
                        {
                            logoSkillOther && logoSkillOther.length > 0 &&
                            logoSkillOther.map((item, index) => {
                                return (
                                    <div className="h-20 w-20 flex flex-col p-2" key={index}>
                                        <img src={item.link} alt={item.name} className="animate-logo-spin" />
                                        <p className="h-2/6">{item.name}</p>
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
