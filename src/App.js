import React, { Component } from 'react'
import './App.css'
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
}
class App extends Component {
  state = {
    family
  }
  handleClick = () => {
      let localFamily = { ...this.state.family }
      family.member1.age += 1
      this.setState({family: localFamily})
  }
  render () {
    const {title} = this.props
    const {family} = this.state
    return (
        <div className="App">
          <h1>{title}</h1>
          <Member
              age={family.member1.age}
              name={family.member1.name} >
            Myself
          </Member>
          <Member
              age={family.member2.age}
              name={family.member2.name} />
          <Member
              age={family.member3.age}
              name={family.member3.name} />
          <Member
              age={family.member4.age}
              name={family.member4.name} >
            <strong> My father</strong>
          </Member>
          <button onClick={this.handleClick}>Getting older</button>
        </div>
    )
  }
}

export default App
