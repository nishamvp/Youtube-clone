import { Provider } from 'react-redux'
import Body from './components/Body'
import store from './utils/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchPage from './components/WatchPage'
import MainContainer from './components/MainContainer'
import SearchPage from './components/SearchPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
      {
        path: 'results',
        element: <SearchPage />,
      },
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
