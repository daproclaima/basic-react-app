import React, { Component } from 'react'
import './App.css'
import Member from './components/Member'
import Button from './components/Button'

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
  handleClick = num => {
      // console.log(this.state.family)
      // console.log({...this.state.family})
      //gives {this.state.family.member1, this.state.family.member2...}

      let family = { ...this.state.family }
      family.member1.age += num
      this.setState({family: family})
  }
  handleChange = event => {
    let family = { ...this.state.family }
    const name = event.target.value
    console.log(name)
    family.member1.name = name
    this.setState({family: family})
  }
  render () {
    const {title} = this.props
    const {family} = this.state
    return (
        <div className="App">
          <h1>{title}</h1>
            <input value={family.member1.name} onChange={this.handleChange} type="text" />
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
            <Button getOlder={() => this.handleClick(2)} />
        </div>
    )
  }
}

export default App
