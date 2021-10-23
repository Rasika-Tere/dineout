
// this is the final book page

import React from 'react';
import Container from '@material-ui/core/Container';
import FinalBookGrid from '../Components/FinalBookPage/FinalBookGrid';
import Hidden from '@material-ui/core/Hidden';
import CenteredTabs from '../Components/HomePage/Tabs';


export default function Gallery() {
  return (
    <div className="App">

      <header className="App-header">
       
        
        <Hidden mdDown>
        <CenteredTabs />
        </Hidden>
      </header>
    <React.Fragment>
      <Container fixed>
        <p>
          {/* This component grid has all the other components of the page in grids */}
          <FinalBookGrid />
        </p>
      </Container>
    </React.Fragment>
     {/* added bottom navigation */}
     <footer className="App-footer" position="sticky ">
        
      </footer>
    </div>

  );
}