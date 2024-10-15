import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Education() {

    return (
        <>
            <div>
                <h1 className="py-5 pt-32 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-950">Education</h1>
                <div className="bg-[#2c2c2c] rounded-2xl flex flex-col gap-20 xl:p-[40px] lg:p-[40px] md:p-[30px] sm:p-[20px] text-center ">
                    <VerticalTimeline
                    >
                        <VerticalTimelineElement
                            className="text-white text-left p-1"
                            contentStyle={{ background: '#676a6f' }}
                            contentArrowStyle={{ borderRight: '7px solid  #676a6f' }}
                            date="2018 - 2021"
                            position="left"
                            iconStyle={{ background: '#676a6f', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            icon={<i className="fa-solid fa-graduation-cap fa-xl"></i>}
                        >
                            <div>
                                <h3 className="vertical-timeline-element-title xl:text-xl lg:text-xl md:text-xl sm:text-lg font-semibold">Han Thuyen High School</h3>
                                <h4 className="vertical-timeline-element-subtitle">Bac Ninh, Viet Nam</h4>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="text-white text-left p-1"
                            contentStyle={{ background: '#676a6f' }}
                            contentArrowStyle={{ borderRight: '7px solid #676a6f' }}
                            date="2021 - Present"
                            position="right"
                            iconStyle={{ background: '#676a6f', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            icon={<i className="fa-solid fa-graduation-cap fa-xl"></i>}
                        >
                            <div className='text-left'>
                                <h3 className="vertical-timeline-element-title xl:text-xl lg:text-xl md:text-xl sm:text-lg font-semibold">Posts and Telecommunications Institute of Technology - PTIT</h3>
                                <h4 className="vertical-timeline-element-subtitle">Ha Noi, Viet Nam</h4>
                                <p>
                                    Majoring in Information Technology
                                    <br />
                                    Final student with GPA: 3.2
                                </p>
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>

                </div>
            </div >
        </>
    )
}

export default Education
