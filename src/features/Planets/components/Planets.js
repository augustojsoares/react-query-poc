import { useState } from 'react'
import { useGetPlanets } from 'features/Planets'
import { PageControl } from 'components'

export default function Planets() {
  const [page, setPage] = useState(1)

  // Queries
  const { status, data, isFetching } = useGetPlanets(page)

  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'error') {
    return <p>Error :(</p>
  }

  return (
    <>
      <h1>Planets</h1>
      <ul>
        {data.results.map((planet) => (
          <li key={planet.name}>
            <div>{planet.name}</div>
          </li>
        ))}
      </ul>
      <PageControl {...{ data, page, setPage }} />
      {isFetching ? <div>Refreshing...</div> : ''}
    </>
  )
}
