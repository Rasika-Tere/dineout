import React from 'react';
import Container from '@material-ui/core/Container';
import ButtonAppBar from '../Components/AppBar';



export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
           <ButtonAppBar></ButtonAppBar>
           
        </Container>
    </React.Fragment>
  );
}