import { axios } from 'lib/axios'
import { useQuery } from 'react-query'
import { useGlobalState } from 'hooks/useGlobalLocation'

const getPlanets = (page = 1) => axios.get(`planets?page=${page}`)

export default function useGetPlanets(page, filter) {
  const [tenant] = useGlobalState('tenant')
  const [project] = useGlobalState('project')
  const [environment] = useGlobalState('environment')

  return useQuery(
    ['Planets', tenant, project, environment, page, filter],
    ({ signal }) => getPlanets(page, filter, signal),
    { keepPreviousData: true }
  )
}
