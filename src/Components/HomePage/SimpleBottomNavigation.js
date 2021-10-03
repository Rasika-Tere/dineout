import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


import { IconButton } from '@material-ui/core';
import Home from '../../Assets/Home.png';
import BookATable from '../../Assets/BookATable.png';
import DineoutPassport from '../../Assets/DineoutPassport.png';
import Payment from '../../Assets/Payment.png';
import Community from '../../Assets/Community.png';

const useStyles = makeStyles({
  root: {

  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      
        
          <BottomNavigationAction label="Home" icon={<IconButton>
            <img src={Home} height={40} width={60}/>
          </IconButton>} />

          <BottomNavigationAction label="Book a Table" icon={<IconButton>
            <img src={BookATable} height={40} width={50}/>
          </IconButton>} />
          
          <BottomNavigationAction label="Dineout Passport" icon={<IconButton>
            <img src={DineoutPassport} height={50} width={80}/>
          </IconButton>} />
          
          <BottomNavigationAction label="Community" icon={<IconButton>
            <img src={Payment} height={50} width={70}/>
          </IconButton>} />

          <BottomNavigationAction label="Community" icon={<IconButton>
            <img src={Community} height={40} width={50}/>
          </IconButton>} />
        
         
         
         
         
         
         
        
          
        

        
         
        

      

    </BottomNavigation>

  );
}
