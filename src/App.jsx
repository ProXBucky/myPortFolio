import './App.css'
import General from './layout/General'
import AboutMe from './layout/AboutMe'
import Education from './layout/Education'
import Skills from './layout/Skills'
import PersonalProject from './layout/PersonalProject'
import Contact from './layout/Contact'

function App() {

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className='w-full pb-16'>
        <General />
      </div>
      <div className='bg-[#1a1a1a] rounded-2xl flex flex-col mx-[130px] p-[40px]'>
        <AboutMe />
        <Skills />
        <Education />
        <PersonalProject />
        <Contact scrollTop={scrollTop} />
      </div>
      <div className='pt-20'>

      </div>
    </>
  )
}

export default App
