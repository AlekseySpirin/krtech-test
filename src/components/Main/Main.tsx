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
      <UserList/>
      <Divider orientation="vertical" flexItem/>
      <Chat/>
    </Grid>
  );
};

export default Main;
