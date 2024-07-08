import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function PersonalProject() {

    return (
        <>
            <div>
                <h1 className="py-5 pt-32 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-950">Personal Project</h1>
                <div className="bg-[#2c2c2c] rounded-2xl flex flex-col gap-20 xl:p-[40px] lg:p-[40px] md:p-[30px] sm:p-[10px] text-center ">
                    <VerticalTimeline
                        layout='1-column-left'
                    >
                        <VerticalTimelineElement
                            className="text-white text-left"
                            contentStyle={{ background: '#676a6f' }}
                            contentArrowStyle={{ borderRight: '7px solid #676a6f' }}
                            date="May 2024 - July 2024"
                            position="right"
                            iconStyle={{ background: '#676a6f', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            icon={<i class="fa-solid fa-book fa-xl"></i>}
                        >
                            <div>
                                <h3 className="vertical-timeline-element-title text-xl font-semibold">The rent car system (Mioto)</h3>
                                <p>Team size: 1</p>
                                <p>Position: Fullstack developer</p>
                                <p>Technology stack:
                                    <li>Frontend: ReactJS, Redux-Toolkit, TaiwindCSS, axios,...</li>
                                    <li>Backend: NestJS, Postgres, TypeORM, Cloudinary, ...</li>
                                </p>
                                <p>Detail project:
                                    <li>Function: View detail car's information, Order car, statistics on number of admins, users, cars, trips, blogs, reports, comments,
                                        CRUD admins, users, cars, trips, blogs, ...</li>
                                </p>
                                <div className="bg-[url(/Mioto-Demo.jpg)] mt-5 bg-no-repeat bg-cover bg-center rounded-xl h-[500px] w-full md:hidden sm:hidden" />
                                <div className='flex gap-10 justify-center py-10'>
                                    <a className='p-2 rounded-full border-2 xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/3 hover:bg-gray-500 text-center' href='https://mioto-frontend.vercel.app' target='_blank'>View demo</a>
                                    <a className='p-2 rounded-full border-2 xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/3 hover:bg-gray-500 text-center' href='https://github.com/ProXBucky/mioto-backup' target='_blank'>View code</a>

                                </div>


                            </div>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="text-white text-left"
                            contentStyle={{ background: '#676a6f' }}
                            contentArrowStyle={{ borderRight: '7px solid #676a6f' }}
                            date="April 2024"
                            position="right"
                            iconStyle={{ background: '#676a6f', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            icon={<i class="fa-solid fa-book fa-xl"></i>}
                        >
                            <div>
                                <h3 className="vertical-timeline-element-title text-xl font-semibold">The online testing system PTIT</h3>
                                <p>Team size: 4</p>
                                <p>Position: Fullstack developer</p>
                                <p>Technology stack:
                                    <li>Frontend: HTML, CSS, Javascript</li>
                                    <li>Backend: Spring Boot, Hibernate, MySQL</li>
                                </p>
                                <p>Detail project:
                                    <li>Function: Train and test exams in PTIT </li>
                                </p>
                                <div className="bg-[url(/PTIT-demo.bmp)] mt-5 bg-no-repeat bg-contain bg-center rounded-xl h-[500px] w-full md:hidden sm:hidden" />
                                <div className='flex gap-10 justify-center py-10'>
                                    {/* <a className='p-2 rounded-full border-2 xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/3 hover:bg-gray-500 text-center' href='https://thecoffeehouse-clone.vercel.app' target='_blank'>View demo</a> */}
                                    <a className='p-2 rounded-full border-2 xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/3 hover:bg-gray-500 text-center' href='https://github.com/ProXBucky/BTN-LapTrinhWeb-SpringBoot' target='_blank'>View code</a>

                                </div>


                            </div>
                        </VerticalTimelineElement>


                        <VerticalTimelineElement
                            className="text-white text-left"
                            contentStyle={{ background: '#676a6f' }}
                            contentArrowStyle={{ borderRight: '7px solid #676a6f' }}
                            date="Jul 2023 - Sep 2023"
                            position="right"
                            iconStyle={{ background: '#676a6f', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            icon={<i class="fa-solid fa-book fa-xl"></i>}
                        >
                            <div>
                                <h3 className="vertical-timeline-element-title text-xl font-semibold">The online food ordering system The Coffee House</h3>
                                <p>Team size: 1</p>
                                <p>Position: Fullstack developer</p>
                                <p>Technology stack:
                                    <li>Frontend: ReactJS, Redux-Toolkit, TaiwindCSS, axios, React Hook Form,...</li>
                                    <li>Backend: ExpressJS, MySQL, Sequelize, Cloudinary, ...</li>
                                </p>
                                <p>Detail project:
                                    <li>Function: Order products, statistics on number of admins, products, stores, orders, total sales, CRUD admins, products, stores, orders, histories</li>
                                </p>
                                <div className="bg-[url(https://res.cloudinary.com/dqi9ub7dw/image/upload/v1696748815/Project-IMG/Prj1_fezj2z.png)] mt-5 bg-no-repeat bg-cover bg-center rounded-xl h-[500px] w-full md:hidden sm:hidden" />
                                <div className='flex gap-10 justify-center py-10'>
                                    <a className='p-2 rounded-full border-2 xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/3 hover:bg-gray-500 text-center' href='https://thecoffeehouse-clone.vercel.app' target='_blank'>View demo</a>
                                    <a className='p-2 rounded-full border-2 xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/3 hover:bg-gray-500 text-center' href='https://github.com/ProXBucky/TheCoffeeHouseBackup' target='_blank'>View code</a>

                                </div>


                            </div>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="text-white text-left"
                            contentStyle={{ background: '#676a6f' }}
                            contentArrowStyle={{ borderRight: '7px solid #676a6f' }}
                            date="Oct 2023"
                            position="right"
                            iconStyle={{ background: '#676a6f', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            icon={<i class="fa-solid fa-book fa-xl"></i>}
                        >
                            <div>
                                <h3 className="vertical-timeline-element-title text-xl font-semibold">My Portfolio</h3>
                                <p>Team size: 1</p>
                                <p>Position: Frontend developer</p>
                                <p>Technology stack: ReactJS, TaiwindCSS,...</p>
                                <div className="bg-[url(https://res.cloudinary.com/dqi9ub7dw/image/upload/v1696748814/Project-IMG/Prj2_iurz8u.png)] mt-5  bg-no-repeat bg-cover rounded-xl h-[400px] w-full md:hidden sm:hidden" />
                                <div className='flex gap-10 justify-center py-10'>
                                    <a className='p-2 rounded-full border-2 xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/3 hover:bg-gray-500 text-center' href='https://bucky-portfolio.vercel.app' target='_blank'>View demo</a>
                                    <a className='p-2 rounded-full border-2 xl:w-1/6 lg:w-1/6 md:w-1/4 sm:w-1/3 hover:bg-gray-500 text-center' href='https://github.com/ProXBucky/myPortFolio' target='_blank'>View code</a>
                                </div>

                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>

                </div>
            </div >
        </>
    )
}

export default PersonalProject
