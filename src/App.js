import React from 'react';
import './App.css';
import './footer.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Footer from "./Footer";

import * as serviceWorker from "./serviceWorker";

function App() {
  return ( 
    <>  
      <Router>
        <Navbar />
         <h1>My Shopping List</h1>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
		<Footer/>
      </Router>      
    </>
  );
}
serviceWorker.unregister();
export default App;