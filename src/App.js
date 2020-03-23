import React, { useState, useEffect } from 'react'
import Front from "./components/Front/Front"
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


  return (
    <>
      <header>
        <h1>鬼仏表+</h1>
        <figure className="registerIcon"></figure>
      </header>
      <Front jugyous={jugyous} />
      <footer>
        <small>お問い合わせは〇〇まで！</small>
      </footer>
    </>
  )
}

export default App