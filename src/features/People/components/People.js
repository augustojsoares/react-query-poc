import { useState } from 'react'
import { useGetPeople } from 'features/People'
import { PageControl, Filter } from 'components'

export default function People() {
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('')

  // Queries
  const { data, status, isFetching } = useGetPeople(page, filter)

  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'error') {
    return <p>Error :(</p>
  }

  return (
    <>
      <Filter {...{ filter, setFilter }} placeholder="filter by name" />
      <h1>People</h1>
      <ul>
        {data.results.map((person) => (
          <li key={person.name}>
            <div>{person.name}</div>
          </li>
        ))}
      </ul>
      <PageControl {...{ data, page, setPage }} />
      {isFetching ? <div>Refreshing...</div> : ''}
    </>
  )
}
