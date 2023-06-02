import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Red = (props) => {
  return (
    <div className='red'>
      <h1>RED</h1>
    </div>
  )
}

const Blue = (props) => {
  return (
    <div className='blue'>
      <h1>BLUE</h1>
    </div>
  )
}

const Main = (props) => {
  return (

    <BrowserRouter>
      <div id='container'>


        <div id='navbar'>
          <Link to="/blue">Go to Blue</Link>
          <Link to="/red">Go to Red</Link>
        </div>

        <div id='main-section'>
          <Route path="/red">
            <Red />
          </Route>

          <Route path="/blue">
            <Blue />
          </Route>

          <Route exact path="/">
            <Red />
          </Route>

        </div>
      </div>
    </BrowserRouter>
  )
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)