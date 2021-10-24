
// this is the final book page

import React from 'react';
import Container from '@material-ui/core/Container';
import FinalBookGrid from '../Components/FinalBookPage/FinalBookGrid';
import SimpleBottomNavigation from '../Components/HomePage/SimpleBottomNavigation';
import TrialFooter from '../Components/FinalBookPage/TrialFooter';


export default function Gallery() {
  return (
    <div className="App">

      <header className="App-header">
       
        
        
      </header>
    <React.Fragment>
      <Container fixed>
        <p>
          {/* This component grid has all the other components of the page in grids */}
          <FinalBookGrid />
        </p>
      </Container>
    </React.Fragment>
     
    <footer className="App-footer" position="sticky ">
        <TrialFooter/>
      </footer>
    </div>
     
      

  );
}