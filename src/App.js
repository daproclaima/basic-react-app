import React, { Component, Fragment } from 'react';
import './App.css';
import Member from './components/Member'
class App extends Component {
  render () {
    const {title} = this.props
    return (
      <Fragment>
        <div className="App">
          <h1>{title}</h1>
          <Member name='Seb'/>
          <Member name='Laura'/>
          <Member name='Patricia'/>
          <Member name='Iréné'>
            <strong> My father.</strong>
          </Member>
        </div>
      </Fragment>
    )
  }
}

export default App
