import {LOGIN_ROUTE} from "../utils/constants";
import {CHAT_ROUTE} from "../utils/constants";
import Login from '../components/Login/Login'
import Main from '../components/Main/Main'
export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Login/>
  }
]

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Main
  }
]
