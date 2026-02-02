import Search from './components/Search.jsx'
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

        <Search />
      </div>

    </main>
  )
}

export default App
