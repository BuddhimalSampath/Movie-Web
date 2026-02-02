import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1> Find <span classname="text-gradient">Movies</span> you enjoy without the hassle</h1>
        </header>

        <p>Search</p>
      </div>

    </main>
  )
}

export default App
