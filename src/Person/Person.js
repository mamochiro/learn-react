import React from 'react'

const person = prop => {
  return (
    <div>
      <p>I'm {prop.name} , i'm {prop.age} years </p>
      <p onClick={prop.click}>{prop.children}</p>
    </div>
  )
}

export default person