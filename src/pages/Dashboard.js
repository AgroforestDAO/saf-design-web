import React from 'react';
import { Typography } from '@mui/material';
import Navbar from "../components/Navbar";
import PlaningView from '../views/PlaningView';

function Dashboard() {
  return (
    <>
    <Navbar />
    <div style={{ padding: '100px' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <PlaningView />      
    </div>
    </>
  );
}

export default Dashboard;
