import React from 'react';
import Container from '@material-ui/core/Container';
import BasicTextFields from '../Components/TextField';
import TextButtons from '../Components/Textbutton';
import BasicButtonGroup from '../Components/GroupButton';


export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          This is your Contact Details Page
          <BasicTextFields/>
          <BasicButtonGroup/>
          <TextButtons/>
        </p>
       
      </Container>
    </React.Fragment>
  );
}