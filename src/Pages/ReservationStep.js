import React from 'react';
import Container from '@material-ui/core/Container';
import MaterialUIPickers from '../Components/datetime';
import SimpleAccordion from '../Components/ReservationPage/accordian';
import Illustration1 from '../Components/Illustration';
import ConfirmButton from '../Components/ConfirmButton';
import MealSelection from '../Components/MealSelection';
import { Link, Router } from "react-router-dom";
import ReservationDetailsTitle from '../Components/ReservationPage/ReservationDetailsTitle';

export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        {/* reservation details title */}
        <ReservationDetailsTitle />

        {/* illustration on the page, done with single image list */}
        <Illustration1 />

        {/* for selecting the date, the component name is datetime, i was unabel to rename it */}
        <MaterialUIPickers />

        {/* for selecting the meal */}
        <MealSelection />

        {/* for selecting the time of meal, the compoenent name is timebuttons, i was unabel to rename it */}
        <SimpleAccordion />

        {/* the continue button, but i was unable to rename it */}
        <Link to={process.env.PUBLIC_URL + '/contactdetails'}>
          <ConfirmButton />
        </Link>
      </Container>

    </React.Fragment>
  );
}