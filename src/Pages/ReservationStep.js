import React from 'react';
import Container from '@material-ui/core/Container';
import MaterialUIPickers from '../Components/datetime';
import SimpleAccordion from '../Components/accordian';
import Illustration1 from '../Components/illustration';
import ConfirmButton from '../Components/ConfirmButton';
import MealSelection from '../Components/MealSelection';
import ReservationDetails from '../Components/ReservationDetails';




export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
      <ReservationDetails/> 
      <Illustration1/>
       <MaterialUIPickers/>
       <MealSelection/>
       <SimpleAccordion/>
       <ConfirmButton/>
      </Container>
      
    </React.Fragment>
  );
}