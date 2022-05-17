import './Layout.css'
import { AppRoutes } from 'routes'
import { NamespacePicker, SideBar } from 'features'

export default function Layout() {
  return (
    <div className="App">
      <NamespacePicker />
      <div className="main-container">
        <SideBar />
        <AppRoutes />
      </div>
    </div>
  )
}
