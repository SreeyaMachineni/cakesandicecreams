import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { withRouter } from 'react-router'

import Form from './components/Form'
import Register from './components/Register'
import Login from './components/Login'
import Nav from './components/Nav'
import Home from './components/Home'
import './App.css'



import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {reducer} from './components/middleware/redux'
import {watchFetchDog} from './components/middleware/sagas'

const sagaMiddleware = createSagaMiddleware();

let store = createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchDog)

const Main = withRouter(({location})=>{
  return(
    <div>
      {
        location.pathname !== '/login' && location.pathname !== '/register'  && <Nav/>
      }
        <Route path="/login" exact strict component={Form}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/home" exact component={Home}/>
    </div>
  )
})


function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Main/>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
