import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard.js';
import store from './lib/store.js';
import CategoryCreateForm from './component/category-form/CategoryCreateForm.js';

class App extends Component {
    render() {
      return (
        <div className="App">
          <Provider store={store}>
            <BrowserRouter>
            <React.Fragment>
              <Route path="/" component={Dashboard} />
              <Route path="/category" component={CategoryCreateForm} />
            </React.Fragment>
            </BrowserRouter>
          </Provider>
        </div>
      );
    }
  }
  
  export default App;