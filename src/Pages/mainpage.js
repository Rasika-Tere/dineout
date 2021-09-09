import React from 'react';
import Container from '@material-ui/core/Container';
import TextButtons from '../Components/Textbutton';


export default function mainpage() {
  return (
    <React.Fragment>
        <Container fixed>
            < TextButtons/>
        </Container>
    </React.Fragment>
  );
}