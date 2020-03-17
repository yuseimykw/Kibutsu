import React from "react"

const App = () => {
  return (
    <>
      <header>
        <h1>鬼仏表+</h1>
        <div className="register-icon"></div>
      </header>
      <section className="jikanwari">
        <div className="j-items">
          <ul className="one">
            <li>理論社会学<input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
          </ul>
          <ul className="two">
            <li>環境法<input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
          </ul>
          <ul className="three">
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
            <li>マイノリティ論<input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
          </ul>
          <ul className="four">
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
          </ul>
          <ul className="five">
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
            <li><input type="checkbox" /></li>
          </ul>

        </div>

        <div className="btns">
          <button type="button">全消去</button>
          <button type="button">選択済み消去</button>
        </div>

        <form action="#">
          <p>memo:</p>
          <textarea cols="30" rows="10"></textarea>
          <button type="submit">追加</button>
        </form>

      </section>
    </>
  )
}

export default App