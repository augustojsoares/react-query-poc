import { axios } from 'lib/axios'
import { useQuery } from 'react-query'
import { useGlobalState } from 'hooks/useGlobalLocation'

const getSpecies = (page = 1) => axios.get(`species?page=${page}`)

export default function useGetSpecies(page, filter) {
  const [tenant] = useGlobalState('tenant')
  const [project] = useGlobalState('project')
  const [environment] = useGlobalState('environment')

  return useQuery(
    ['Species', tenant, project, environment, page, filter],
    ({ signal }) => getSpecies(page, filter, signal),
    { keepPreviousData: true }
  )
}
