import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import Homepage from "../Pages/Homepage";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import UserProfile from "../Pages/UserProfile";
import CardDetails from "../Components/Homepage/Cards/CardDetails";
import BookedEvents from "../Pages/BookedEvents";
import PrivateRoutes from "./PrivateRoutes";
import PreventionRoute from "./PreventionRoute";
import EventForm from "../Pages/CreateEvent";
import Explore from "../Pages/Explore";
import MyEvents from "../Pages/MyEvents";

const customRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/registration",
        element: (
          <PreventionRoute>
            <Registration></Registration>
          </PreventionRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PreventionRoute>
            <Login></Login>
          </PreventionRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <UserProfile></UserProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/create",
        element: (
          <PrivateRoutes>
            <EventForm></EventForm>
          </PrivateRoutes>
        ),
      },
      {
        path: "/MyEvent",
        element: (
          <PrivateRoutes>
            <MyEvents></MyEvents>
          </PrivateRoutes>
        ),
      },
      {
        path: "/explore",
        element: (
          <PrivateRoutes>
            <Explore></Explore>
          </PrivateRoutes>
        ),
      },
      {
        path: "/services/:id",
        loader: () => fetch("/events.json"),
        element: (
          <PrivateRoutes>
            <CardDetails></CardDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/user/booked-events",
        element: (
          <PrivateRoutes>
            <BookedEvents></BookedEvents>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default customRoutes;
