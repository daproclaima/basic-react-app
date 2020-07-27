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
    family,
    isDescriptionShow: false
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

  handleShowDescription = () => {
    const isDescriptionShow = !this.state.isDescriptionShow
    this.setState({ isDescriptionShow })
  }

  render () {
    const {title} = this.props
    const {family, isDescriptionShow} = this.state

    let description = null

    if (isDescriptionShow) {
      description = <strong> My father</strong>
    }

    const list = Object.keys(family)
      .map(member => (
        <Member
              age={family[member].age}
              name={family[member].name} >
        </Member>
      ))
    console.log(list)

    return (
        <div className="App">
          <h1>{title}</h1>
          <input value={family.member1.name} onChange={this.handleChange} type="text" />
          {list}
          { /*<Member
              age={family.member4.age}
              name={family.member4.name} >
            { description }
            <button onClick={this.handleShowDescription}>
              {
                isDescriptionShow ? 'Hide' : 'Show'
              }
            </button>
            
          </Member>*/}
            <Button getOlder={() => this.handleClick(2)} />
        </div>
    )
  }
}

export default App
