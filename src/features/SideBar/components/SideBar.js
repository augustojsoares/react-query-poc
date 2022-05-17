import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <nav className="App-sidebar">
      <Link to="/">Home</Link>
      <Link to="/films">Films</Link>
      <Link to="/people">People</Link>
      <Link to="/planets">Planets</Link>
      <Link to="/species">Species</Link>
      <Link to="/starships">Starships</Link>
    </nav>
  )
}
