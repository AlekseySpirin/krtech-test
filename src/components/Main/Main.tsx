import React, {FC} from 'react';
import {Grid} from '@mui/material'
// import MiniDrawer from "../MiniDrawer/MiniDrawer";
import SideBar from "../SideBar/SideBar";
import UserList from "../UserList/UserList";

const Main: FC = () => {
  return (
    <Grid  height={'100vh'} container>
      <SideBar/>
      <Grid height={'100vh'} minWidth={345} item xs={2.5}>
        <UserList/>
      </Grid>

      <Grid bgcolor={'primary.dark'} item xs>asd</Grid>
    </Grid>
  );
};

export default Main;
