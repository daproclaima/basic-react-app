import React, { Component, Fragment } from 'react';
import './App.css';
import Member from './components/Member'

const family = {
  member1: {
    name: 'Sébastien',
    age: 25
  },
  member2: {
    name: 'Laura',
    age: 22
  },
  member3: {
    name: 'Patricia',
    age: 61
  },
  member4: {
    name: 'Iréné',
    age: 69
  }
};
class App extends Component {
  state = {
    family
  }
  render () {
    const {title} = this.props;
    const {family} = this.state;
    return (
      <Fragment>
        <div className="App">
          <h1>{title}</h1>
          <Member name={family.member1.name}/>
          <Member name={family.member2.name}/>
          <Member name={family.member3.name}/>
          <Member name={family.member4.name}>
            <strong> My father.</strong>
          </Member>
        </div>
      </Fragment>
    )
  }
}

export default App
