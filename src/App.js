import React, { useState, useEffect } from 'react'
import Front from "./components/Front/Front"
import axios from "axios"
import styled, { isStyledComponent } from 'styled-components'

const App = () => {

  const [jugyous, setJugyous] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3001/jugyous")
      .then(response => {
        setJugyous(response.data)
      })
      .catch(error => {
        alert("通信失敗したよ！")
      })
  }, [])


  return (
    <>
      <HeaderGround>
        <h1>鬼仏表+</h1>
        <RegisterIcon></RegisterIcon>
      </HeaderGround>
      <Front jugyous={jugyous} />
      <Footer>
        <Small>お問い合わせは〇〇まで！</Small>
      </Footer>
    </>
  )
}

////////////////////////
////StyledComponent////
///////////////////////

const HeaderGround = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: slategray;
  color: white;
`
const RegisterIcon = styled.figure`
  background-color: white;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px 10px;
`

const Footer = styled.footer`
  background-color: slategray;
  padding: 30px 0;
  display: flex;
  justify-content: center;
`

const Small = styled.small`
  color: white;
`


export default App