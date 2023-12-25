import React, {FC} from 'react';
import {Grid} from '@mui/material'
// import MiniDrawer from "../MiniDrawer/MiniDrawer";
import SideBar from "../SideBar/SideBar";

const Main: FC = () => {
  return (
    <Grid  height={'100vh'} container>
      <SideBar/>
      <Grid bgcolor={'green'} item xs={3}>asd</Grid>
      <Grid bgcolor={'primary.dark'} item xs>asd</Grid>
    </Grid>
  );
};

export default Main;
