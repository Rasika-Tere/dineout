import React from 'react';
import Container from '@material-ui/core/Container';
import Illustration2 from '../Components/Illustration2';
import ContactDetails from '../Components/ContactDetailsPage/ContactDetails';
import DetailsTextFields from '../Components/ContactDetailsPage/DetailsTextField';
import GuestNumber from '../Components/GuestNumber';
import ContinueButton from '../Components/ContinueButton';
import {Link, Router} from "react-router-dom";
import { Button } from '@material-ui/core';

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
          <ContinueButton/> 
          
          <Link to={process.env.PUBLIC_URL + '/reservationstep'}>
          <Button variant="contained" color="primary" href="">
           Link
      </Button>
      </Link>
 
          
        </p>
       
      </Container>
    </React.Fragment>
  );
}