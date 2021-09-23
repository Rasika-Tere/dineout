import React from 'react';
import Container from '@material-ui/core/Container';
import MaterialUIPickers from '../Components/datetime';
import SimpleAccordion from '../Components/accordian';
import Illustration1 from '../Components/Illustration';
import ConfirmButton from '../Components/ConfirmButton';
import MealSelection from '../Components/MealSelection';
import ReservationDetails from '../Components/ReservationPage/ReservationDetails';
import {Link, Router} from "react-router-dom";

export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
      {/* reservation details title */}
      <ReservationDetails/> 
      
      {/* illustration on the page, done with single image list */}
      <Illustration1/>
       
       {/* for selecting the date, the component name is datetime, i was unabel to rename it */}
       <MaterialUIPickers/>
       
       {/* for selecting the meal */}
       <MealSelection/>
       
       {/* for selecting the time of meal, the compoenent name is timebuttons, i was unabel to rename it */}
       <SimpleAccordion/>
       
       {/* the continue button, but i was unable to rename it */}
       <Link to={process.env.PUBLIC_URL + '/contactdetails'}>
       <ConfirmButton/>
       </Link>
      </Container>
      
    </React.Fragment>
  );
}