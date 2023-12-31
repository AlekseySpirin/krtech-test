import React, {FC} from 'react';
import {Grid} from '@mui/material'
// import MiniDrawer from "../MiniDrawer/MiniDrawer";
import SideBar from "../SideBar/SideBar";
import UserList from "../UserList/UserList";
import Chat from "../Chat/Chat";
import Divider from "@mui/material/Divider";

const Main: FC = () => {
  return (
    <Grid height={'100vh'} container>
      <SideBar/>
      <Grid height={'100vh'} minWidth={345} item xs={2.5}>
        <UserList/>
      </Grid>
      <Divider orientation="vertical" flexItem/>
      <Grid container item xs>
        <Chat/>
      </Grid>
    </Grid>
  );
};

export default Main;
