import { useState } from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Footer from './Components/Footer/Footer'
import Newsletter from './Components/Newsletter/Newsletter'
import TopCourses from './Components/TopCourses/TopCourses'
import TopExams from './Components/TopExams/TopExams'
import SubscribeAlert from './Components/SubscribeAlert/SubscribeAlert'
import TopCollegesTable from './Components/TopTenCollege/TopTenCollege'
import StudyGoal from './Components/StudyGoal/StudyGoal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Hero/>
<TopCourses/>
<StudyGoal/>
<TopExams/>
<SubscribeAlert/>

    <Newsletter/>
    <TopCollegesTable/>
    <Footer/>
    </>
  )
}

export default App
