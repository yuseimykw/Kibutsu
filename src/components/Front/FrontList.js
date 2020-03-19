import React from 'react'

const FrontList = ({ jugyous }) => {

  console.log(jugyous[0])

  return (
    <li className="item">
      <h3>{jugyous[0].teacher}</h3>
      <h3>{jugyous[0].subName}</h3>
      <h3>{jugyous[0].date}</h3>
    </li>
  )
}

export default FrontList