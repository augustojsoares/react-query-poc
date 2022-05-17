export default function PageControl({
  data: { previous: hasPrevious, next: hasNext },
  page,
  setPage,
}) {
  const loadPrevious = () => setPage(page - 1)
  const loadNext = () => setPage(page + 1)
  return (
    <>
      {hasPrevious ? (
        <button type="button" onClick={loadPrevious}>
          {'<< Previous Page'}
        </button>
      ) : (
        ''
      )}
      <span>{` Page ${page} `}</span>
      {hasNext ? (
        <button type="button" onClick={loadNext}>
          {'Next Page >>'}
        </button>
      ) : (
        ''
      )}
    </>
  )
}
