import { useState } from 'react'
import './App.css';
import GeneralInfo from './components/Generalnfo';
import EducationList from './components/Education';
function App() {

  return (
    <>
      <GeneralInfo></GeneralInfo>
      <EducationList></EducationList>
    </>
  )
}

export default App
