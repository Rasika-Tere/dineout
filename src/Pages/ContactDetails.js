import React from 'react';
import Container from '@material-ui/core/Container';
import ContactDetailsGrid from '../Components/ContactDetailsPage/ContactDetailsGrid';

export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>

         <ContactDetailsGrid/>

        </p>

      </Container>
    </React.Fragment>
  );
}