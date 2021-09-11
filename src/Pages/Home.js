import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import BasicButtonGroup from '../Components/GroupButton';
import MaterialUIPickers from '../Components/datetime';
import SpacingGrid from '../Components/grid';
import CenteredGrid from '../Components/BasicGrid';

export default function Home() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          Welcome to your web application. Make something beautiful!

        </p>
        <p>
          To get started, edit <code>src/App.js</code>, save, and reload this page.
        </p>
        < DatePickers></DatePickers>
        < BasicButtonGroup />
        < MaterialUIPickers />
        <SpacingGrid/>
        <CenteredGrid/>

      </Container>
    </React.Fragment>
  );
}