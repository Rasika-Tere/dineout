
// this is the contact details page

import React from 'react';
import Container from '@material-ui/core/Container';
import ContactDetailsGrid from '../Components/ContactDetailsPage/ContactDetailsGrid';

export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          {/* This component grid has all the other components of the page in grids */}
          <ContactDetailsGrid />
        </p>
      </Container>
    </React.Fragment>
  );
}