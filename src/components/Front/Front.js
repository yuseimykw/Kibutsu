import React from 'react'
// import Upload from './Upload'

const Front = ({ jugyou }) => {
  return (
    <>
      <section className="post_page">
        <h2 className="page_title">投稿</h2>
        <div className="post_content">
          <form action="sbumit">
            <p>教授名：</p>
            <input type="text" name="teacher" />
            <p>教科名：</p>
            <input type="text" name="subName" />
            <p>評価:</p>
            <b>仏</b>
            <input type="checkbox" name="hotoke" />
            <input type="checkbox" name="yaya_hotoke" />
            <input type="checkbox" name="basic" />
            <input type="checkbox" name="yaya_oni" />
            <input type="checkbox" name="oni" />
            <b>鬼</b>
            <p>曜日:</p>
            <select name="week">
              <option value="指定なし">...</option>
              <option value="月曜">月曜日</option>
              <option value="火曜">火曜日</option>
              <option value="水曜">水曜日</option>
              <option value="木曜">木曜日</option>
              <option value="金曜">金曜日</option>
              <option value="土曜">土曜日</option>
            </select>
            <p>時限:</p>
            <select name="term">
              <option value="指定なし">...</option>
              <option value="1限">1限</option>
              <option value="2限">2限</option>
              <option value="3限">3限</option>
              <option value="4限">4限</option>
              <option value="5限">5限</option>
            </select>
            <p>コメント:</p>
            <textarea name="comment" cols="30" rows="10"></textarea>
            <button type="submit" className="submit_btn">送信</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Front