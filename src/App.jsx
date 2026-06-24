import { useState } from 'react'
import './App.css';
import GeneralInfo from './components/Generalnfo';
import EducationList from './components/Education';
import ExperienceList from './components/Experiences';
function App() {

  return (
    <>
      <GeneralInfo></GeneralInfo>
      <EducationList></EducationList>
      <ExperienceList></ExperienceList>
    </>
  )
}

export default App
