import React from 'react';
import Container from '@material-ui/core/Container';
import BasicButtonGroup from '../Components/GroupButton';
import CenteredGrid from '../Components/grid3';
import ContainedButtons from '../Components/ContainedButtons';
import TimeButtons from '../Components/TimeButtons';
import NestedGrid from '../Components/TimeButtons copy';


export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          This is your gallery page
        </p>
       
       <NestedGrid/>
       <TimeButtons/>
       <CenteredGrid/>
       
      </Container>
    </React.Fragment>
  );
}