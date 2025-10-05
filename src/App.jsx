import ParticlesBackground from "./components/ParticlesBackground"
import { Route, Routes } from "react-router-dom"
import MiscellaneousPage from "./components/pages/MiscellaneousPage"
import HomePage from "./components/pages/HomePage"
import SocialLinks from "./components/SocialLinks"
import GeneralFooter from "./components/GeneralFooter"
import AllProjectsPage from "./components/pages/AllProjectsPage"
import AllTechsPage from "./components/pages/AllTechsPage"
import ResumePage from "./components/pages/ResumePage"

function App() {

  return (
    <>
      <ParticlesBackground />
      <SocialLinks />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/projects" element={<AllProjectsPage />}/>

        {/* <Route path="/technologies" element={<AllTechsPage />}/> */}

        <Route path="/miscellaneous" element={<MiscellaneousPage />}/>

        <Route path="/resume" element={<ResumePage />} />
      </Routes>

      <GeneralFooter />
    </>
  )
}

export default App
