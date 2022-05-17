import { useQuery } from 'react-query'
import { axios } from 'lib/axios'
import { useGlobalState } from 'hooks/useGlobalLocation'

const getStarships = (page = 1) => axios.get(`starships?page=${page}`)

export default function useGetStarships(page) {
  const [tenant] = useGlobalState('tenant')
  const [project] = useGlobalState('project')
  const [environment] = useGlobalState('environment')

  return useQuery(['Starships', tenant, project, environment, page], () => getStarships(page), {
    keepPreviousData: true,
  })
}
