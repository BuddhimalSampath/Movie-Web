import Search from './components/Search.jsx'
import './App.css'
import { use, useState } from 'react'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1> Find <span className="text-gradient">Movies</span> you enjoy without the hassle</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={searchTerm}/>
      </div>
    </main>
  )
}

export default App
