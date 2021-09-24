import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import ReservationStep from './Pages/ReservationStep.js'
import ContactDetails from './Pages/ContactDetails.js'
import FinalBook from './Pages/FinalBook'
import SimpleBottomNavigation from './Components/HomePage/bottomnavigation';

function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      
     
      </header>

     
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/reservationstep'}  > <ReservationStep/> </Route>
            <Route path={process.env.PUBLIC_URL + '/contactdetails'}  > <ContactDetails/> </Route>
            <Route path={process.env.PUBLIC_URL + '/finalbook'}  > <FinalBook/> </Route>          
          </Switch>
          
      <footer className="App-footer">
         <SimpleBottomNavigation/>
      </footer>
    </div>
  );
  }

export default App;
