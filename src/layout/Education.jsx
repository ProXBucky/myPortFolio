import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Education() {

    return (
        <>
            <div>
                <h1 className="py-5 pt-32 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-950">Education</h1>
                <div className="bg-[#2c2c2c] rounded-2xl flex flex-col gap-20 p-[40px] text-center ">
                    <VerticalTimeline
                    >
                        <VerticalTimelineElement
                            className="text-white text-left"
                            contentStyle={{ background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(29 78 216))' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(29 78 216)' }}
                            date="2018 - 2021"
                            position="left"
                            iconStyle={{ background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(29 78 216))', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            icon={<i className="fa-solid fa-graduation-cap fa-xl"></i>}
                        >
                            <div>
                                <h3 className="vertical-timeline-element-title text-xl font-semibold">Han Thuyen High School</h3>
                                <h4 className="vertical-timeline-element-subtitle">Bac Ninh, Viet Nam</h4>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="text-white text-left"
                            contentStyle={{ background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(29 78 216))' }}
                            contentArrowStyle={{ borderRight: '7px solid rgb(37, 99, 235)' }}
                            date="2018 - 2021"
                            position="right"
                            iconStyle={{ background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(29 78 216))', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            icon={<i className="fa-solid fa-graduation-cap fa-xl"></i>}
                        >
                            <div className='text-left'>
                                <h3 className="vertical-timeline-element-title text-xl font-semibold">Posts and Telecommunications Institute of Technology - PTIT</h3>
                                <h4 className="vertical-timeline-element-subtitle">Ha Noi, Viet Nam</h4>
                                <p>
                                    Majoring in Information Technology
                                    <br />
                                    A third-year student with CPA: 3.16
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
