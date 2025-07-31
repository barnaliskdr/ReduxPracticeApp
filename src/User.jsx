import React from 'react'

const User = (props) => {

    console.log(props);

  return (
    <div>
      <h1>Name: {props.data.name}</h1>
      <h1>Age: {props.data.age}</h1>
    </div>
  )
}

export default User

//component
//container
//service (action,reducer,constants)