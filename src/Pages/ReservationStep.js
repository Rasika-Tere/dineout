import React from 'react';
import Container from '@material-ui/core/Container';
import TextButtons from '../Components/Textbutton';
import MaterialUIPickers from '../Components/datetime';




export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          
        </p>
        <TextButtons/>
       
       <MaterialUIPickers/>
       <TextButtons/>
       
      </Container>
    </React.Fragment>
  );
}