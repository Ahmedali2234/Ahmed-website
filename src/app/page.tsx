import Navbar from "./components/Navbar"
import Body from "./components/Body"
import AboutMe from "./components/AboutMe"
import Contact from "./components/contact"
import Projects from "./components/Projects"
import Techinic from "./components/techinic"




export default function Home() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <AboutMe/>
      <Techinic/>
      <Projects/>
      <Contact/>

    </div>
  )
}
