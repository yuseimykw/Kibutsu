import React, { useState, useEffect } from 'react'
import Front from "./components/Front/Front"
import FrontList from "./components/Front/FrontList"
import axios from "axios"

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
  // console.log(jugyous[0]["week"])

  return (
    <>
      <header>
        <h1>鬼仏表+</h1>
        <figure className="register-icon"></figure>
      </header>
      <FrontList jugyous={jugyous} />
      <Front />
      <footer>
        <small>お問い合わせは〇〇まで！</small>
      </footer>
    </>
  )
}

export default App