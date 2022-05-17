import { GLOBAL_NAMESPACE_STORAGE_KEY } from 'config'

//Mock data. Can be fetched from anywhere
export const getLocationData = () => [
  {
    name: 't1',
    projects: [
      {
        name: 't1-p1',
        environments: [{ name: 't1-p1-e1' }, { name: 't1-p1-e2' }, { name: 't1-p1-e3' }],
      },
      {
        name: 't1-p2',
        environments: [{ name: 't1-p2-e1' }, { name: 't1-p2-e2' }, { name: 't1-p2-e3' }],
      },
      {
        name: 't1-p3',
        environments: [{ name: 't1-p3-e1' }, { name: 't1-p3-e2' }, { name: 't1-p3-e3' }],
      },
    ],
  },
  {
    name: 't2',
    projects: [
      {
        name: 't2-p1',
        environments: [{ name: 't2-p1-e1' }, { name: 't2-p1-e2' }, { name: 't2-p1-e3' }],
      },
      {
        name: 't2-p2',
        environments: [{ name: 't2-p2-e1' }, { name: 't2-p2-e2' }, { name: 't2-p2-e3' }],
      },
      {
        name: 't2-p3',
        environments: [{ name: 't2-p3-e1' }, { name: 't2-p3-e2' }, { name: 't2-p3-e3' }],
      },
    ],
  },
  {
    name: 't3',
    projects: [
      {
        name: 't3-p1',
        environments: [{ name: 't3-p1-e1' }, { name: 't3-p1-e2' }, { name: 't3-p1-e3' }],
      },
      {
        name: 't3-p2',
        environments: [{ name: 't3-p2-e1' }, { name: 't3-p2-e2' }, { name: 't3-p2-e3' }],
      },
      {
        name: 't3-p3',
        environments: [{ name: 't3-p3-e1' }, { name: 't3-p3-e2' }, { name: 't3-p3-e3' }],
      },
    ],
  },
]

const getDefaultNamespace = () => {
  const data = getLocationData()
  const tenant = data[0].name
  const project = data[0].projects[0].name
  const environment = data[0].projects[0].environments[0]

  const defaultNamespace = {
    tenant,
    project,
    environment,
  }

  storage.set(GLOBAL_NAMESPACE_STORAGE_KEY, defaultNamespace)
  return defaultNamespace
}

export const storage = {
  get: (key) => JSON.parse(localStorage.getItem(key)) || getDefaultNamespace(),
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
}
