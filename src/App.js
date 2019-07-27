import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import CreateProduct from './components/CreateProduct';
import CreateUser from './components/CreateUser';
import ListProducts from './components/ListProducts';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
      <Route path="/" exact component={ListProducts} />
      <Route path="/product/:id" component={CreateProduct} />
      <Route path="/user" component={CreateUser} />
      <Route path="/product" component={ListProducts} /> 
      </div>
    </Router>
  );
}

export default App;
