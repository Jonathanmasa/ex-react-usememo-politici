import React from 'react'

function PoliticianCard({ politician }) {
  console.log(`Render: ${politician.name}`)

  return (
    <div className="card">
      <img src={politician.image} alt={politician.name} />
      <h2>{politician.name}</h2>
      <h4>{politician.position}</h4>
      <p>{politician.biography}</p>
    </div>
  )
}

export default React.memo(PoliticianCard)