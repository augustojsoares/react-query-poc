import { Routes, Route } from 'react-router-dom'
import { Home, Films, People, Planets, Species, Starships } from 'features'

export default function AppRoutes() {
  return (
    <div className="data-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="films" element={<Films />} />
        <Route path="people" element={<People />} />
        <Route path="planets" element={<Planets />} />
        <Route path="species" element={<Species />} />
        <Route path="starships" element={<Starships />} />
      </Routes>
    </div>
  )
}
