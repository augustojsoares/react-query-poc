import { useGlobalState, setGlobalState } from 'hooks/useGlobalLocation'
import { storage, getLocationData } from 'utils'
import { GLOBAL_NAMESPACE_STORAGE_KEY } from 'config'

export default function NamespacePicker() {
  const locationData = getLocationData()
  const [tenant] = useGlobalState('tenant')
  const [project] = useGlobalState('project')
  const [environment] = useGlobalState('environment')

  // when a higher level resource is selected, nested resources default to the first one
  const switchTenant = ({ target: { value: newTenantName } }) => {
    const newTenant = locationData.find((tenant) => tenant.name === newTenantName)

    const newProject = newTenant.projects[0]

    const newEnvironment = newProject.environments[0]

    setGlobalState('tenant', newTenantName)
    setGlobalState('project', newProject.name)
    setGlobalState('environment', newEnvironment.name)
    storage.set(GLOBAL_NAMESPACE_STORAGE_KEY, {
      tenant: newTenantName,
      project: newProject.name,
      environment: newEnvironment.name,
    })
  }

  const switchProject = ({ target: { value: newProjectName } }) => {
    const newProject = locationData
      .find((t) => t.name === tenant)
      .projects.find((p) => p.name === newProjectName)

    const newEnvironment = newProject.environments[0]

    setGlobalState('project', newProjectName)
    setGlobalState('environment', newEnvironment.name)
    storage.set(GLOBAL_NAMESPACE_STORAGE_KEY, {
      tenant,
      project: newProjectName,
      environment: newEnvironment.name,
    })
  }

  const switchEnvironment = ({ target: { value: newEnvironmentName } }) => {
    setGlobalState('environment', newEnvironmentName)
    storage.set(GLOBAL_NAMESPACE_STORAGE_KEY, {
      tenant,
      project,
      environment: newEnvironmentName,
    })
  }

  return (
    <header className="App-header">
      <select name="tenant" id="tenant-select" onChange={switchTenant} value={tenant}>
        {locationData.map(({ name }, idx) => (
          <option value={name} key={name}>
            {`Tenant ${idx + 1} >> ${name}`}
          </option>
        ))}
      </select>
      <select name="project" id="project-select" onChange={switchProject}>
        {locationData
          .find(({ name }) => name === tenant)
          .projects.map(({ name }, idx) => (
            <option value={name} key={name}>
              {`Project ${idx + 1} >> ${name}`}
            </option>
          ))}
      </select>
      <select name="environment" id="environment-select" onChange={switchEnvironment}>
        {locationData
          .find(({ name }) => name === tenant)
          .projects.find(({ name }) => name === project)
          .environments.map(({ name }, idx) => (
            <option value={name} key={name}>
              {`Environment ${idx + 1} >> ${name}`}
            </option>
          ))}
      </select>
    </header>
  )
}
