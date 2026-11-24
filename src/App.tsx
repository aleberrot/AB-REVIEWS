import { Outlet, ScrollRestoration } from 'react-router-dom'
import './App.css'
import SiteMeasurement from './components/SiteMeasurement'

function App() {
  return (
    <>
      <Outlet />
      <SiteMeasurement />
      <ScrollRestoration />
    </>
  )
}

export default App
