import { useState } from 'react'
import { useGetStarships } from 'features/Starships'
import { PageControl } from 'components'

export default function Starships() {
  const [page, setPage] = useState(1)

  // Queries
  const { status, data, isFetching } = useGetStarships(page)

  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'error') {
    return <p>Error :(</p>
  }

  return (
    <>
      <h1>Starships</h1>
      <ul>
        {data.results.map((starship) => (
          <li key={starship.name}>
            <div>{starship.name}</div>
          </li>
        ))}
      </ul>
      <PageControl {...{ data, page, setPage }} />
      {isFetching ? <div>Refreshing...</div> : ''}
    </>
  )
}
