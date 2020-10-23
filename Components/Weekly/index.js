import React, { useState } from "react"
import Chart from '../chart'
export default function Home (
  {

  })
{
  const [view, setView] = useState({
    view: "1",
    title: "Like",
    datas: [65, 59, 80, 81, 56, 55, 40]
  });

  return (
    <div className="flex app">
      <div className="box">
        <button 
        className={view.view === "1" ? "active" : ""}
        onClick={() =>
        {
          setView({
            view: "1",
            title: "Like",
            datas: [65, 59, 80, 81, 56, 55, 40]
          })
        }}>
          Like
      </button>
      </div>
      <div className="box">
        <button 
        className={view.view === "2" ? "active" : ""}
        onClick={() =>
        {
          setView({
            view: "2",
            title: "Comment",
            datas: [75, 80, 80, 81, 56, 82, 40]
          })
        }}>
          Comment
      </button>
      </div>
      <div className="box">
        <button
        className={view.view === "3" ? "active" : ""}
        onClick={() =>
        {
          setView({
            view: "3",
            title: "Point",
            datas: [80, 40, 80, 81, 56, 82, 40]
          })
        }}>
          Point
      </button>
      </div>
      <div className="box">
        <button 
        className={view.view === "4" ? "active" : ""}
        onClick={() =>
        {
          setView({
            view: "4",
            title: "Diamond",
            datas: [40, 80, 80, 81, 56, 82, 40]
          })
        }}>
          Diamond
      </button>
      </div>
      <div className="w100">
        {
          <Chart
            title={view.title}
            datas={view.datas}
          />
        }
      </div>
      <style jsx>{`
          .flex
          {
            display:flex;
            flex-wrap:wrap;
            justify-content:start;
          }
          .w100
          {
            width:100%;
          }
          button
          {
            background: transparent;
            border: 1px solid #3766ff;
            border-radius: 12px;
            padding: 4px 8px;
            color:#3766ff;
            font-size:10px;
          }
          .box
          {
            padding: 16px 8px;
          }
          .active
          {
            background: #3766ff;
            color:white;
          }
        }
      `}</style>

    </div>
  )
}
