import { useState } from 'react'
import { useGetSpecies } from 'features/Species'
import { PageControl } from 'components'

export default function Species() {
  const [page, setPage] = useState(1)

  // Queries
  const { status, data, isFetching } = useGetSpecies(page)

  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'error') {
    return <p>Error :(</p>
  }

  return (
    <>
      <h1>Species</h1>
      <ul>
        {data.results.map((specie) => (
          <li key={specie.name}>
            <div>{specie.name}</div>
          </li>
        ))}
      </ul>
      <PageControl {...{ data, page, setPage }} />
      {isFetching ? <div>Refreshing...</div> : ''}
    </>
  )
}
