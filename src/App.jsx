import { useState } from 'react'
import './App.css'
import qrImg from './assets/image-qr-code.png'

const Card = () => {
  return (
    <div className='card'>
      <Qr />
      <Text />
    </div>
  )
}

const Qr = () => {
  return (
    <img src={qrImg}></img>
  )
}

const Text = () => {
  return (
    <div>
      <h2>Improve your front-end skills by building projects</h2>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
  )
}

function App() {
  return (
    <div id='app'>
      <Card />
    </div>
  )
}

export default App
