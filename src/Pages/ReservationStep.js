import React from 'react';
import Container from '@material-ui/core/Container';
import TextButtons from '../Components/Textbutton';
import MaterialUIPickers from '../Components/datetime';
import SimpleAccordion from '../Components/accordian';




export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
        
        </p>
        <TextButtons/>
        {/* < img src={require('./Assets/illustration1.png').default} height={200} width={200} /> */}
       <MaterialUIPickers/>
       <TextButtons/>
       <SimpleAccordion/>
      </Container>
      
    </React.Fragment>
  );
}