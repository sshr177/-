import { createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/post/:id',
        element: <DetailPage />
    },
])

export default router