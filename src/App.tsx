

import './App.css'
import { TechQuotes } from "./components/TechQuotes";

function App() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen pt-16 pb-8 space-y-8">
      <h1 className="text-5xl font-bold text-center">Random Pokemon Generator</h1>
      <p className="text-gray-700 text-center">ボタンを押すとランダムにポケモンが出現し亜mす</p>
      <TechQuotes/>
      <footer>
        <p className="text-gray-700 text-center">Created by <a className="text-blue-600" href="#" target="_blank" rel="noreferrer">@your-handle</a> © 2025</p>
      </footer>
    </div>
    </>
  )
}

export default App
