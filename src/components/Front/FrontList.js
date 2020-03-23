import React from 'react'
import styled from 'styled-components'

const FrontList = ({ jugyous }) => {
  // const jugyou = jugyous[0]
  // console.dir(jugyou.id)

  return (

    <ul>

      {jugyous.map((jugyou) => {
        return (
          <li>
            <SimpleItem>
              <li>{jugyou.teacher}</li>
              <li>{jugyou.subName}</li>
              <li>{jugyou.date}</li>
            </SimpleItem>
          </li>
        )
      })}
    </ul>

  )
}

const SimpleItem = styled.ul`
  display:flex;
  justify-content: space-around;
  border:solid 2px slategray;
  li{
    margin-right:5px;
    list-style:none;
  }
  li::last-child{
    margin-right:0;
  }
`

export default FrontList 