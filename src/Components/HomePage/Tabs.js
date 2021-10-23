import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
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
        indicatorColor="primary"
        textColor="primary"
        left
      >
        
        <Tab label="Home" />
        <Tab label="Book a Tabel" />
        <Tab label="Dineouy Passport" />
        <Tab label="Dineout Pay" />
        <Tab label="Community" />
       
      </Tabs>
      </Grid>
    </Paper>
  );
}
