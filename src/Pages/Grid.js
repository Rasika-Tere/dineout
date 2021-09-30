import React from 'react';
import Container from '@material-ui/core/Container';
import HomeGrid from '../Components/HomePage/HomeGrid';


export default function Grid() {
  return (
    
    <React.Fragment>
      <Container fixed>
        <HomeGrid/>
      </Container>
    </React.Fragment>
    
  );
}