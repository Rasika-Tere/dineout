import React from 'react';
import Container from '@material-ui/core/Container';
import ConfirmButton from '../Components/ContactDetailsPage/ConfirmButton';
import ContactDetailsGrid from '../Components/ContactDetailsPage/ContactDetailsGrid';

export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>

         <ContactDetailsGrid/>

          
          

          
          

         
         
          

          {/* this is a group button component to add the number of guests */}
          {/* <GuestNumber /> */}

          
          


        </p>

      </Container>
    </React.Fragment>
  );
}