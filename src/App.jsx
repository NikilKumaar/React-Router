import { Route, Routes } from 'react-router-dom'
import './App.css'
import FullStackDeveloperPage from './pages/FullStackDeveloper'
import DataSciencePage from './pages/DataScience'
import CyberSecurityPage from './pages/CyberSecurity'
import CareerPage from './pages/Career'
import AllPage from './pages/AllPage'



function App() {

  //creating router pages using react-router-dom
  return (
    <Routes>
      <Route exact path="/" element={<AllPage/> }/>
      <Route path="/fsd" element={<FullStackDeveloperPage/>}/>
      <Route path="/dataScience" element={<DataSciencePage/>}/>
      <Route path="/cyberSecurity" element={<CyberSecurityPage/>}/>
      <Route path="/career" element={<CareerPage/>}/>
    </Routes>
  )
}

export default App
