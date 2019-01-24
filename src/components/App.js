import React, { Component } from 'react';
import Items from './Items';
import InvoicesAndReceipts from './InvoicesAndReceipts';
import AddItem from './AddItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/items/">Items</Link>
              </li>
              <li>
                <Link to="/additem/">Add Item</Link>
              </li>
              <li>
                <Link to="/invoicesandreceipts/">Invoices & Receipts</Link>
              </li>
              <li>
                <Link to="/vendors/">Vendors</Link>
              </li>
              <li>
                <Link to="/paymentsmethods/">Payment methods</Link>
              </li>
              <li>
                <Link to="/analytics/">Analytics</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Route exact path="/" component={Items} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/items/:id" component={Items} />
            <Route path="/invoicesandreceipts" component={InvoicesAndReceipts} />
            <Route path="/additem" component={AddItem} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
