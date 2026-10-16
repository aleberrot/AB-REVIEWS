import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Demo from './pages/Demo'
import ReviewLink from './pages/ReviewLink'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'demo', element: <Demo /> },
      { path: 'r/:slug', element: <ReviewLink /> },
      { path: '*', element: <ReviewLink /> },
    ],
  },
])
