import React from 'react';
import Container from '@material-ui/core/Container';
import MaterialUIPickers from '../Components/ReservationPage/datetime';
import SimpleAccordion from '../Components/ReservationPage/accordian';
import Illustration1 from '../Components/Illustration1';

import MealSelection from '../Components/ReservationPage/MealSelection';
import { Link, Router } from "react-router-dom";
import ReservationDetailsTitle from '../Components/ReservationPage/ReservationDetailsTitle';
import ContinueButton from '../Components/ReservationPage/ContinueButton';


export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        {/* reservation details title */}
        <ReservationDetailsTitle />

        {/* illustration on the page, done with single image list */}
        <Illustration1/>

        {/* for selecting the date, the component name is datetime, i was unabel to rename it */}
        <MaterialUIPickers />

        {/* for selecting the meal */}
        <MealSelection />

        {/* for selecting the time of meal, the compoenent name is timebuttons, i was unabel to rename it */}
        <SimpleAccordion />

        {/* the continue button, but i was unable to rename it */}
       <ContinueButton/>
      </Container>

    </React.Fragment>
  );
}