import React from 'react'

const FrontList = ({ jugyous }) => {
  // const jugyou = jugyous[0]
  // console.dir(jugyou.id)

  return (
    <section className="contents">
      <h2 className="page_title">一覧</h2>
      <ul className="item_list">
        {jugyous.map((jugyou) => {
          return (
            <li>
              <ul>
                <li>{jugyou.teacher}</li>
                <li>{jugyou.subName}</li>
                <li>{jugyou.evaluation}</li>
                <li>{jugyou.week}</li>
                <li>{jugyou.term}</li>
                <li>{jugyou.date}</li>
                <li>{jugyou.comment}</li>
              </ul>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default FrontList