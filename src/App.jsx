import { useEffect, useState, useMemo } from 'react'
import './App.css'
import PoliticianCard from './components/PoliticianCard'

function App() {
  const [politicians, setPoliticians] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://boolean-spec-frontend.vercel.app/freetestapi/politicians')
      .then(res => res.json())
      .then(data => setPoliticians(data))
  }, [])

  // Milestone 2: useMemo per evitare ricalcoli inutili
  const filteredPoliticians = useMemo(() => {
    return politicians.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.biography.toLowerCase().includes(search.toLowerCase())
    )
  }, [politicians, search])

  return (
    <div className="App">
      {/* Milestone 2: Campo di ricerca */}
      <input
        type="text"
        placeholder="Cerca un politico..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Milestone 1: Visualizzazione card */}
      <div className="card-list">
        {filteredPoliticians.map(politician => (
          <PoliticianCard key={politician.id} politician={politician} />
        ))}
      </div>
    </div>
  )
}

export default App

