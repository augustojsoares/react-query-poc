import './FilmList.css'
export default function FilmList({ films = [] }) {
  return (
    <ul>
      {films.map((film) => (
        <li key={film.title} className="FilmList-li">
          <h2>{film.title}</h2>
          <div>{`By ${film.director}. ${film.release_date}`}</div>
        </li>
      ))}
    </ul>
  )
}
