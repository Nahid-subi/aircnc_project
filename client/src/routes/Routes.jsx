import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import { getRoom } from '../api/rooms'
import Home from '../pages/Home/Home'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import MyBookings from '../pages/Dashboard/MyBookings'
import AddRoom from '../pages/Dashboard/AddRoom'
import MyListings from '../pages/Dashboard/MyListing'
import ManageBookings from '../pages/Dashboard/ManageBookings'
import ErrorPage from '../pages/ErrorPage'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails/></PrivateRoute>,
        loader: ({ params }) => getRoom(params.id) // Pass params.id to getRoom
      },      
    ],
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/signup',
    element: <SignUp/>
  },
  {
    path:'/dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
    children:[
      {
        path: '/dashboard',
        element: <MyBookings/>,
      },
      {
        path: '/dashboard/add-room',
        element: <AddRoom/>,
      },
      {
        path: '/dashboard/my-bookings',
        element: <MyBookings/>,
      },
      {
        path: '/dashboard/my-listings',
        element: <MyListings/>,
      },
      {
        path: '/dashboard/manage-bookings',
        element: <ManageBookings/>,
      },
    ]
  }
])
