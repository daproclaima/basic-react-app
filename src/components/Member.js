import React, {Fragment} from 'react'

const Member = ({name, age, children}) =>
    <Fragment>
      <h2>{name.toUpperCase()} : {age} yo</h2>
      { children
          ? <p>{children}</p>
          : <Fragment />
      }
    </Fragment>


export default Member
