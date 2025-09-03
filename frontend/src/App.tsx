import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Checkout from './pages/Checkout';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={ProductList} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/admin" component={AdminDashboard} />
      </Switch>
    </Router>
  );
};

export default App;