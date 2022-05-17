import { createGlobalState } from 'react-hooks-global-state'
import { storage } from 'utils'
import { GLOBAL_NAMESPACE_STORAGE_KEY } from 'config'

// load from somewhere (storage, cookie, api, etc...)
const initialState = storage.get(GLOBAL_NAMESPACE_STORAGE_KEY)

const { setGlobalState, useGlobalState } = createGlobalState(initialState)

export { useGlobalState, setGlobalState }
