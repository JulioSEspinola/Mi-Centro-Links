import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MiCentro from './assets/mi_centro_logo.png'
import './App.css'

import LinkButton from './components/LinkButtons'

function App() {

  return (
    <>
      <div>
        <a href="https://micentrowa.org/" target="_blank">
          <img src={MiCentro} className="logo" alt="Mi Centro" />
        </a>
        <h2>Mi Centro Links </h2>
      </div>
      <LinkButton/>
    </>
  )
}

export default App
