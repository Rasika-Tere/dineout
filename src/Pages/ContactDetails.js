import React from 'react';
import Container from '@material-ui/core/Container';
import BasicTextFields from '../Components/TextField';
import TextButtons from '../Components/Textbutton';


export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          This is your Contact Details Page
          <BasicTextFields/>
          <TextButtons/>
        </p>
       
      </Container>
    </React.Fragment>
  );
}