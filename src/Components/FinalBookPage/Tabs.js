import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        fontFamily: 'futura',
        color: 'grey',
        indicatorColor: '#FF645A',
        textColor: '#FF645A',
    },


});

export default function CenteredTabs() {

    const classes = useStyles();
    const style = {


    };
    const [value, setValue] = React.useState(0);
    

    const handleChange = (event, newValue) => {
        setValue(newValue);


    };

    return (
       
       <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                centered
            >
                <Tab label="Home" />
                <Tab label="Book a Table" />
                <Tab label="Dineout Passport" />
                <Tab label="Dineout Pay" />
                <Tab label="Community" />

            </Tabs>
        </Paper>
    );
}
