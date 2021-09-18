import React from 'react';
import Container from '@material-ui/core/Container';
import BasicTextFields from '../Components/TextField';
import TextButtons from '../Components/Textbutton';
import BasicButtonGroup from '../Components/GroupButton';
import Illustration2 from '../Components/illustration2';
import ContactDetails from '../Components/ContactDetailsPage/ContactDetails';
import DetailsTextFields from '../Components/ContactDetailsPage/DetailsTextField';





export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          <ContactDetails/>
          <Illustration2/>
          Enter Your Details
          <DetailsTextFields/>
          
          <BasicButtonGroup/>
          <TextButtons/>
        </p>
       
      </Container>
    </React.Fragment>
  );
}