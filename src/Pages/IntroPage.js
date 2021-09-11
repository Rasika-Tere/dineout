import React from 'react';
import Container from '@material-ui/core/Container';
import BasicButtonGroup from '../Components/GroupButton';
import CenteredGrid from '../Components/grid3';


export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          This is your gallery page
        </p>
       <BasicButtonGroup/> 
       <CenteredGrid/>
       
      </Container>
    </React.Fragment>
  );
}