import React from 'react';
import Container from '@material-ui/core/Container';
import PrimarySearchAppBar from '../Components/HomePage/PrimarysearchBar';
import Grid from '@material-ui/core/Grid';
import HomeGrid from '../Components/HomePage/HomeGrid';
import SimpleBottomNavigation from '../Components/HomePage/SimpleBottomNavigation';

export default function Gallery() {
  return (
    <div className="App">

      <header className="App-header">
        {/* for top search bar */}
        <Grid item xs={12} lg={12}>
        <PrimarySearchAppBar />
        </Grid>
      </header>
     
     
      <React.Fragment>
        <Container fixed>
          <p>
            
            <HomeGrid/>

          </p>
        </Container>
      </React.Fragment>
      <footer className="App-footer" position="sticky ">
       <SimpleBottomNavigation/>
      </footer>
    </div>

  );
}