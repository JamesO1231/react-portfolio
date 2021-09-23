import React from 'react';
import Main from './components/Main'; 
import Profile from './components/Profile'; 
import Contact from './components/Contact'; 
import {Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <div style={{ backgroundImage: 'url(./images/background.png)'}}></div>
    <div className="App">
      <Route exact path='/' component={Main}/>
      <Route exact path='/Profile' component={Profile}/>
      <Route exact path='/Contact' component={Contact}/>
    </div>
    </>
  )
};

export default App;