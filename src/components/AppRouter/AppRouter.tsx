import React, {useContext} from 'react';
import {privateRoutes, publicRoutes} from "../../routes/routes";
import {Navigate, Route, Routes} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../../utils/constants";
import Login from "../Login/Login";
import {Context, FirebaseContextProps} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "../Loader/Loader";


const AppRouter = (): React.JSX.Element => {

  const {auth} = useContext(Context) as FirebaseContextProps;
  const [currentUser, loading] = useAuthState(auth)

  if (loading) {
    return <Loader/>
  }
  return (
    <Routes>
      {publicRoutes.map(({path, Component}) => {
        return <Route key={path} path={path} element={Component}/>
      })}
      {privateRoutes.map(({path, Component}) => {
        return <Route key={path} path={path}
                      element={<ProtectedRoute element={Component} isLoggedIn={!!currentUser}/>}/>
      })}
      {/*<Route path={LOGIN_ROUTE} element={<Login/>}/>*/}
      {/*<Route path={CHAT_ROUTE} element={<ProtectedRoute element={Main} isLoggedIn={!!currentUser}/>}/>*/}
      {!!currentUser ? (
        <Route path={LOGIN_ROUTE} element={<Navigate to={CHAT_ROUTE}/>}/>
      ) : (
        <Route
          path={LOGIN_ROUTE}
          element={<Login/>}
        />
      )
      }
      <Route path='*' element={<Navigate to={CHAT_ROUTE}/>}/>
    </Routes>
  );
};

export default AppRouter;
