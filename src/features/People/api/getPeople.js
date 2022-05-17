import { axios } from 'lib/axios'
import { useQuery } from 'react-query'
import { useGlobalState } from 'hooks/useGlobalLocation'

const getPeople = (page = 1, filter = '', signal) =>
  axios.get(`/people?page=${page}${filter ? `&name=${filter}` : ''}`, { signal })

export default function useGetPeople(page, filter) {
  const [tenant] = useGlobalState('tenant')
  const [project] = useGlobalState('project')
  const [environment] = useGlobalState('environment')

  return useQuery(
    ['People', tenant, project, environment, page, filter],
    ({ signal }) => getPeople(page, filter, signal),
    { keepPreviousData: true }
  )
}
