import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Loader.scss'
const Loader = () => {
  return (
    <div className={'Loader'}>
      <CircularProgress/>
    </div>
  );
};

export default Loader;
