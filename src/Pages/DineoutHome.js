import React from 'react';
import Container from '@material-ui/core/Container';
import SearchAppBar from '../Components/searchbar';




export default function Gallery() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          This is your dineout home page
          <SearchAppBar/>
          </p>
      </Container>
    </React.Fragment>
  );
}