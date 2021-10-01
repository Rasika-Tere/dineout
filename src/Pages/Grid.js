import React from 'react';
import Container from '@material-ui/core/Container';
import ContactDetailsGrid from '../Components/ContactDetailsPage/ContactDetailsGrid';


export default function Grid() {
  return (
    
    <React.Fragment>
      <Container fixed>
     <ContactDetailsGrid/>
      </Container>
    </React.Fragment>
    
  );
}