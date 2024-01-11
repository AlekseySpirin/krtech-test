import React, {FC} from 'react';
import {Grid} from '@mui/material'
import Sidebar from "../Sidebar/Sidebar";
import UserList from "../UserList/UserList";
import Chat from "../Chat/Chat";
import Divider from "@mui/material/Divider";

const Main: FC = () => {
  return (
    <Grid container>
      <Sidebar/>
      <Grid item>
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
