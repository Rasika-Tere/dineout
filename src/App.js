import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import ReservationStep from './Pages/ReservationStep.js'
import ContactDetails from './Pages/ContactDetails.js'
import FinalBook from './Pages/FinalBook'
import DineoutHome from './Pages/DineoutHome'
import Intropage from './Pages/IntroPage'
import SimpleBottomNavigation from './Components/bottomnavigation';




function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      <ButtonAppBar/>
     
      </header>

     
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
            <Route path={process.env.PUBLIC_URL + '/reservationstep'}  > <ReservationStep/> </Route>
            <Route path={process.env.PUBLIC_URL + '/contactdetails'}  > <ContactDetails/> </Route>
            <Route path={process.env.PUBLIC_URL + '/finalbook'}  > <FinalBook/> </Route>
            <Route path={process.env.PUBLIC_URL + '/dineouthome'}  > <DineoutHome/> </Route>
            <Route path={process.env.PUBLIC_URL + '/intropage'}  > <Intropage/> </Route>
           
            
            
          </Switch>
          
      <footer className="App-footer">
       
        
         <SimpleBottomNavigation/>
      </footer>
    </div>
  );
  }

export default App;
