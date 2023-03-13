import { useContext } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { path } from "./constants/path";
import { AppContext } from "./context/app.context";
import Container from "./pages/container/container";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import MyReviews from "./pages/review/my-reviews";
import ReviewCreate from "./pages/review/review-create";
import ReviewDetail from "./pages/review/review-detail";
import ReviewEdit from "./pages/review/review-edit";
import Signup from "./pages/sign-up/sign-up";
export default function useRouteElement() {
  const RejectPrivate = () => {
    const { isAuth } = useContext(AppContext);
    return isAuth ? <Navigate to={path.dashboard} /> : <Outlet />;
  };
  const RejectPrivateCreateEdit = () => {
    const { isAuth } = useContext(AppContext);
    return !isAuth ? <Navigate to={path.login} /> : <Outlet />;
  };
  const routeElements = useRoutes([
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "",
      element: <Container />,
      children: [
        {
          path: path.dashboard,
          element: <Dashboard />,
        },
        {
          path: "/my-review",
          element: <MyReviews />,
        },
      ],
    },
    {
      path: "",
      element: <RejectPrivateCreateEdit />,
      children: [
        {
          path: "",
          element: <Container />,
          children: [
            {
              path: "/create",
              element: <ReviewCreate />,
            },
          ],
        },
      ],
    },
    {
      path: "",
      element: <RejectPrivate />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return routeElements;
}
