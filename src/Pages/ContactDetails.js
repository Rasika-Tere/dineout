
// this is the contact details page

import React from 'react';
import Container from '@material-ui/core/Container';
import ContactDetailsGrid from '../Components/ContactDetailsPage/ContactDetailsGrid';
import TopBar from '../Components/FinalBookPage/TopBar';
import Hidden from '@material-ui/core/Hidden';

export default function Gallery() {
  return (
    
    <div className="App">

      <header className="App-header">
        

        {/* added top search bar for desktop version */}
        <Hidden mdDown>
          <TopBar />
        </Hidden>
      </header>

    <React.Fragment>
      <Container fixed>
        <p>
          {/* This component grid has all the other components of the page in grids */}
          <ContactDetailsGrid />
        </p>
      </Container>
    </React.Fragment>
    </div>

  );
}