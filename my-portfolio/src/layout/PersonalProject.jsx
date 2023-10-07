import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function PersonalProject() {

    return (
        <>
            <div>
                <h1 className="py-5 pt-32 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-950">Personal Project</h1>
                <div className="bg-[#2c2c2c] rounded-2xl flex flex-col gap-20 p-[40px] text-center ">
                    <VerticalTimeline
                    layout='1-column-left'
                    >
                        <VerticalTimelineElement
                            className="text-white text-left"
                            contentStyle={{ background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(29 78 216))' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(29 78 216)' }}
                            date="Jul 2023 - Sep 2023"
                            position="right"
                            iconStyle={{ background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(29 78 216))', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            icon={<i class="fa-solid fa-book fa-xl"></i>}
                        >
                            <div>
                                <h3 className="vertical-timeline-element-title text-xl font-semibold">The Coffee House Clone</h3>
                                <p>Team size: 1</p>
                                <p>Position: Fullstack</p>
                                <p>Technology stack:</p>
                                <li>Frontend: ReactJS, Redux-Toolkit, TaiwindCSS, axios, React Hook Form,...</li>
                                <li>Backend: ExpressJS, MySQL, Sequelize,...</li>
                                <p>Detail project:
                                    <li>Using ReactJS, Redux-Toolkit, TailwindCSS to clone website: <a href='https://thecoffeehouse.com' target='_blank'>https://thecoffeehouse.com</a></li>
                                    <li>Using React Hook Form to validate before handling data</li>
                                    <li>Saving images in Cloudinary</li>
                                    <li>Using ExpressJS, MySQL to create API for website on NodeJS Platform </li>
                                    <li>Authentication and Authorization with JWT, cookies.</li>
                                    <li>Shopping cart with LocalStorage</li>
                                    <li>Function: Order products, statistics on number of admins, products, stores, orders, total sales, CRUD admins, products, stores, orders, histories</li>
                                </p>
                                <div className="bg-[url(/src/assets/img/prj1.png)] mt-5 opacity-80 bg-no-repeat bg-cover rounded-xl h-[400px] w-full"/>
                                <div className='flex gap-10 justify-center py-10'>
                                    <a className='p-2 rounded-full border-2 w-1/6 hover:bg-blue-600 text-center' href='https://thecoffeehouse-clone.vercel.app' target='_blank'>View demo</a>
                                    <a className='p-2 rounded-full border-2 w-1/6 hover:bg-blue-600 text-center' href='https://github.com/ProXBucky/TheCoffeeHouseBackup' target='_blank'>View code</a>
                                   
                                </div>
                                
                                
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="text-white text-left"
                            contentStyle={{ background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(29 78 216))' }}
                            contentArrowStyle={{ borderRight: '7px solid rgb(37, 99, 235)' }}
                            date="Oct 2023"
                            position="right"
                            iconStyle={{ background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(29 78 216))', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            icon={<i class="fa-solid fa-book fa-xl"></i>}
                        >
                           <div>
                                <h3 className="vertical-timeline-element-title text-xl font-semibold">My Portfolio</h3>
                                <p>Team size: 1</p>
                                <p>Position: Frontend developer</p>
                                <p>Technology stack: ReactJS, TaiwindCSS,...</p>
                                <div className="bg-[url(/src/assets/img/prj2.png)] mt-5  bg-no-repeat bg-cover rounded-xl h-[400px] w-full"/>
                                <div className='flex gap-10 justify-center py-10'>
                                    <a className='p-2 rounded-full border-2 w-1/6 hover:bg-blue-600 text-center'>View demo</a>
                                    <a className='p-2 rounded-full border-2 w-1/6 hover:bg-blue-600 text-center' href='https://github.com/ProXBucky/myPortFolio' target='_blank'>View code</a>
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
