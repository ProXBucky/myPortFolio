import './App.css'
import Header from './layout/Header'
import General from './layout/General'
import AboutMe from './layout/AboutMe'
import Education from './layout/Education'
import Skills from './layout/Skills'
import PersonalProject from './layout/PersonalProject'
import Award from './layout/Award'
import Contact from './layout/Contact'

function App() {

  return (
    <>
      <Header />
      <div className='w-full pb-16'>
        <General />
      </div>
      <div className='bg-[#1a1a1a] rounded-2xl flex flex-col mx-[130px] h-[1000px] p-[40px]'>
        <AboutMe />
        <Education />
        <Skills />
        <PersonalProject />
        <Award />
        <Contact />
      </div>
    </>
  )
}

export default App
