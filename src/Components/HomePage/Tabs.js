import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    color: '#FF645A',
    fontFamily: 'Futura',
    fontSize: 14.5,
    fontWeight: 'normal',

  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Grid container spacing={1} justifyContent="left">
      

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="#FF645A"
        textColor="#FF645A"
        left
      >
        
        <Grid item  md={1.4}> <Tab label="Home" /></Grid>
        
        <Grid item  md={2.4}><Tab label="Book a Tabel" /></Grid>
        
        <Grid item  md={2.4}><Tab label="Dineouy Passport" /></Grid>
        
        <Grid item  md={2.4}><Tab label="Dineout Pay" /></Grid>
        
        <Grid item  md={2.4}><Tab label="Community" /></Grid>
       
      </Tabs>
      
      </Grid>
    </Paper>
  );
}
