import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'

const router = createBrowserRouter([

    {
        element: <Layout />,
        children: [
            { path: "/", element: <MainPage /> },
            { path: "/DetailPage/:id", element: <DetailPage />},
        ],
    },
])

export default router