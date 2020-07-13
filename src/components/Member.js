import React, {Fragment} from 'react'

const Member = ({name, age, children}) =>
    <Fragment>
      <h2 style={{
        backgroundColor: age < 26 ? 'yellow' : 'blue',
        color: age < 26 ? 'black' : 'white'}}>
        {name.toUpperCase()} : {age} yo
      </h2>
      { children
          ? <p>{children}</p>
          : <Fragment />
      }
    </Fragment>


export default Member
