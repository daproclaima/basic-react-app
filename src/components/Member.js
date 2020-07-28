import React, {Fragment} from 'react'

const Member = ({name, age, children, hideName, handleChange, handleShowDescription, isDescriptionShow }) =>
    <Fragment>
      <h2 style={{
          backgroundColor: age < 26 ? 'yellow' : 'blue',
          color: age < 26 ? 'black' : 'white'}}>
        {name.toUpperCase()} : { age } yo
      </h2>
      <input value={name} onChange={handleChange} type="text" />
      <button onClick={ hideName }>X</button>
      <button onClick={handleShowDescription}>
        {
          isDescriptionShow
          ? 'Hide'
          : 'Show'
        }
      </button>
      { children
          ? <p>{ children }</p>
          : <Fragment />
      }
    </Fragment>


export default Member
