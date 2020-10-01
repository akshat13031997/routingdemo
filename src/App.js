import React from 'react';
import About from './about';
import './App.css';
import Nav from './nav';
import Shop from './shop';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import ItemDetail from './itemdetail';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}
// the router checks all the links in an order an renders every
//component that matches the path discription , to avoid multiple
// renders we use 'switch' we can also use 'exact' to match only if 
// everything matches to the path
function Home(){
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
export default App;
