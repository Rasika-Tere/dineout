import React from 'react';
import Container from '@material-ui/core/Container';
import Illustration2 from '../Components/illustration2';
import ContactDetails from '../Components/ContactDetailsPage/ContactDetails';
import DetailsTextFields from '../Components/ContactDetailsPage/DetailsTextField';
import GuestNumber from '../Components/GuestNumber';
import ConfirmButton from '../Components/ConfirmButton';


export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
         
         {/* the contact deatils title */}
          <ContactDetails/>
          
          {/* the illustration on the page, done by single image list */}
          <Illustration2/>
        
         {/* enter your details text */}
          Enter Your Details
          <DetailsTextFields/>
          
          {/* this is a group button component to add the number of guests */}
          <GuestNumber/>
          
          {/* this is the confirm button */}
          <ConfirmButton/> 
          
        </p>
       
      </Container>
    </React.Fragment>
  );
}