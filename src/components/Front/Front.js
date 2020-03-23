import React from 'react'
import FrontList from "./FrontList"
import styled from 'styled-components'

const Front = ({ jugyous }) => {

  return (
    <>
      <Contents>
        <h2>一覧</h2>
        <ul>
          <FrontList jugyous={jugyous} />
        </ul>
      </Contents>

      <PostPage>
        <h2 className="pageTitle">投稿</h2>
        <div className="postContent">
          <form action="sbumit">
            <p>教授名：</p>
            <input type="text" name="teacher" />
            <p>教科名：</p>
            <input type="text" name="subName" />
            <p>評価:</p>
            <b>仏</b>
            <input type="checkbox" name="hotoke" />
            <input type="checkbox" name="yayaHotoke" />
            <input type="checkbox" name="basic" />
            <input type="checkbox" name="yayaOni" />
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
            <button type="submit" className="submitBtn">送信</button>
          </form>
        </div>
      </PostPage>
    </>
  )
}

const Contents = styled.section`
  display:flex;
  flex-direction: column;
  align-items: center;
  ul{
    list-style:none;
    padding:0;
    margin:5px auto;
    width:80%;
  }
`

const PostPage = styled.section`
  background-color:rgb(160, 182, 204);
  color:black;
  width:85%;
  margin:0 auto;
  display:flex;
  flex-direction: column;
  align-items: center;
  button {
    display:block;
  }
`

export default Front