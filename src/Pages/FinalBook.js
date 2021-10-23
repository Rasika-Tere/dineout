
// this is the final book page

import React from 'react';
import Container from '@material-ui/core/Container';
import FinalBookGrid from '../Components/FinalBookPage/FinalBookGrid';


export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          {/* This component grid has all the other components of the page in grids */}
          <FinalBookGrid />
        </p>
      </Container>
    </React.Fragment>
  );
}