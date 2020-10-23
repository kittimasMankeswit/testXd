import React from "react"

export default function Home (
  {
    img,
    head,
    count,
    many,
  })
{
  return (
    <div className="like app">
      <div className="flex container">
        <div className="head">
          {head}
        </div>
        <div className="count">
          {count}
        </div>
        <div className="many">
          {many}
        </div>
      </div>
      <style jsx>{`
        .app
        {
          font-family:Kanit;
        }
        .flex
        {     
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            text-align: center;
        }
        .container
        {
          justify-content: center;
          text-align: center;
          padding: 12px 0;
          border: 1px solid #d4d4d4;
          border-radius: 8px;
        }
        .padding
        {
          padding: 16px;
        }
        .like , .comment , .point , .diamond
        {
          width:50%;
          padding: 8px;
        }
        .head
        {
          color:#3766ff;
        }
        .many
        {
          color:#928282;
        }
        .count
        {
          width: 100%;
          padding: 6px;
          font-size: 28px;
          font-weight: 600;
        }
        .w100 , head  
        {
          width:100%;
        }
      `}</style>

    </div>
  )
}
