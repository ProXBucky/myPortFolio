import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Certificate() {

    return (
        <>
            <div>
                <h1 className="py-5 pt-32 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-950">Certificate</h1>
                <div className="bg-[#2c2c2c] rounded-2xl flex flex-col gap-20 xl:p-[40px] lg:p-[40px] md:p-[30px] sm:p-[20px] text-center ">
                    <VerticalTimeline
                    >
                        <VerticalTimelineElement
                            className="text-white text-left p-1"
                            contentStyle={{ background: '#676a6f' }}
                            contentArrowStyle={{ borderRight: '7px solid  #676a6f' }}
                            date="2021"
                            position="left"
                            iconStyle={{ background: '#676a6f', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            icon={<i className="fa-solid fa-graduation-cap fa-xl"></i>}
                        >
                            <div>
                                <h3 className="vertical-timeline-element-title xl:text-xl lg:text-xl md:text-xl sm:text-lg font-semibold">First-year Full Entrance Scholarship</h3>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="text-white text-left p-1"
                            contentStyle={{ background: '#676a6f' }}
                            contentArrowStyle={{ borderRight: '7px solid #676a6f' }}
                            date="8/2024"
                            position="right"
                            iconStyle={{ background: '#676a6f', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            icon={<i className="fa-solid fa-graduation-cap fa-xl"></i>}
                        >
                            <div className='text-left flex flex-col gap-3'>
                                <h3 className="vertical-timeline-element-title xl:text-xl lg:text-xl md:text-xl sm:text-lg font-semibold">Google IT Support Professional Certificate (Coursera)</h3>
                                <a className='text-lg font-semibold' target='_blank' href='https://www.coursera.org/account/accomplishments/professional-cert/EL2H4FPAO9ZS' >
                                    Verify
                                    <i class="fa-regular fa-circle-check ml-1"></i>
                                </a>
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>

                </div>
            </div >
        </>
    )
}

export default Certificate
