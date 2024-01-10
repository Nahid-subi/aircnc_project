import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../components/pages/Home/Home'
import Login from '../components/pages/Login/Login'
import SignUp from '../components/pages/SignUp/SignUp'
import RoomDetails from '../components/pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import AddRoom from '../components/pages/Dashboard/AddRoom'
import { getRoom } from '../api/rooms'
import MyBookings from '../components/pages/Dashboard/MyBookings'
import MyListings from '../components/pages/Dashboard/MyListing'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
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
    ]
  }
])
