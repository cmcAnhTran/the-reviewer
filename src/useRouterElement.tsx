import { useRoutes } from 'react-router-dom'
import Container from './pages/container/container'
import Dashboard from './pages/dashboard/dashboard'
import Login from './pages/login/login'
import MyReviews from './pages/review/my-reviews'
import ReviewCreate from './pages/review/review-create'
import ReviewDetail from './pages/review/review-detail'
import ReviewEdit from './pages/review/review-edit'
import Signup from './pages/sign-up/sign-up'
export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '',
      element: <Container />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/create',
          element: <ReviewCreate />,
        },
        {
          path: '/edit',
          element: <ReviewEdit />,
        },
        {
          path: '/sample-detail',
          element: <ReviewDetail />,
        },
        {
          path: '/my-review',
          element: <MyReviews />,
        },
      ],
    },
  ])
  return routeElements
}
