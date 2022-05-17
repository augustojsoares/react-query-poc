import { axios } from 'lib/axios'
import { useQuery } from 'react-query'
import { useGlobalState } from 'hooks/useGlobalLocation'

const getFilms = (page = 1) => axios.get(`films?page=${page}`)

export default function useGetFilms(page, filter) {
  const [tenant] = useGlobalState('tenant')
  const [project] = useGlobalState('project')
  const [environment] = useGlobalState('environment')

  return useQuery(
    ['Films', tenant, project, environment, page, filter],
    ({ signal }) => getFilms(page, filter, signal),
    { keepPreviousData: true }
  )
}
