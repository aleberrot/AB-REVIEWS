import { Outlet, ScrollRestoration } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  )
}

export default App
