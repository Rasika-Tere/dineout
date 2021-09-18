import React from 'react';
import Container from '@material-ui/core/Container';
import Illustration2 from '../Components/illustration2';
import ContactDetails from '../Components/ContactDetailsPage/ContactDetails';
import DetailsTextFields from '../Components/ContactDetailsPage/DetailsTextField';
import ConfrimButton from '../Components/ContactDetailsPage/ConfirmButton';
import GuestNumber from '../Components/GuestNumber';





export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          <ContactDetails/>
          <Illustration2/>
          Enter Your Details
          <DetailsTextFields/>
          <GuestNumber/>
          <ConfrimButton/>
          
        </p>
       
      </Container>
    </React.Fragment>
  );
}