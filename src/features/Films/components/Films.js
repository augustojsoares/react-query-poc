import { useState } from 'react'
import { useGetFilms, FilmList } from 'features/Films'
import { PageControl } from 'components'

export default function Films() {
  const [page, setPage] = useState(1)

  // Queries
  const { data, status, isFetching } = useGetFilms(page)

  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'error') {
    return <p>Error :(</p>
  }

  return (
    <>
      <h1>Films</h1>
      {/* Example using a custom renderer for the data */}
      <FilmList films={data.results} />
      <PageControl {...{ data, page, setPage }} />
      {isFetching ? <div>Refreshing...</div> : ''}
    </>
  )
}
