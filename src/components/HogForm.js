import React from 'react'

const HogForm = (props) => {
  return (
    <form onSubmit={props.submitCallback}>
      <input type="text" id="name" placeholder="name"/>
      <input type="text" id="weight" placeholder="weight"/>
      <input type="submit" value="New Hog"/>
    </form>
  )
}

export default HogForm
