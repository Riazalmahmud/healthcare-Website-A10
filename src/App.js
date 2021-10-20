import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import HeaderSec from './Component/HeaderSec/HeaderSec';
import Home from './Component/Allpages/Homepage/Home';
import About from './Component/Allpages/About/About';
import Service from './Component/Allpages/Service/Service';
import Contact from './Component/Allpages/Contact/Contact';
import NotFoundPage from './Component/Allpages/NotFoundPage/NotFoundPage';
import Footers from './Component/Allpages/Footers/Footers';
import Login from './Component/Allpages/LoginPage/Login';
import Servicebook from './Component/Allpages/ServiceBook/Servicebook';
import AuthProvider from './Context/AuthProvider';
import PrivetRouter from './Component/Allpages/LoginPage/PrivetRouter';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <HeaderSec></HeaderSec>
          <Switch>

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/service">
              <Service></Service>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRouter path="/servicebook/:serviceBookID">
              <Servicebook></Servicebook>
            </PrivetRouter>
            <Route path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
          <Footers></Footers>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
