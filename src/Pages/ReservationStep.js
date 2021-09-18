import React from 'react';
import Container from '@material-ui/core/Container';
import TextButtons from '../Components/Textbutton';
import MaterialUIPickers from '../Components/datetime';
import SimpleAccordion from '../Components/accordian';
import UploadButtons from '../Components/IconButton';
import Illustration1 from '../Components/illustration';
import GuestNumber from '../Components/GuestNumber';




export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
       
        <UploadButtons/>
        <Illustration1/>
       <MaterialUIPickers/>
       <TextButtons/>
       <GuestNumber/>
       <SimpleAccordion/>
      </Container>
      
    </React.Fragment>
  );
}