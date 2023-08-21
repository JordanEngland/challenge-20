import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Portfolio from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'


function App() {


  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
