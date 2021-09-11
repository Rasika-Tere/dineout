import React from 'react';
import Container from '@material-ui/core/Container';
import BasicButtonGroup from '../Components/GroupButton';

export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          This is your gallery page
        </p>
       <BasicButtonGroup/>
      </Container>
    </React.Fragment>
  );
}