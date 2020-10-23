import React, { useState, Fragment } from "react"
export default function Home (
  {

  })
{
  const datas =
  {
    Like: [
      {
        name: "Ekarach Sripen",
        job: "Graphic Designer",
        des: "OKRs Report",
        count: "30",
      },
      {
        name: "Disapat Klomklong",
        job: "Creative",
        des: "OKRs Report",
        count: "22",
      },
      {
        name: "Amanda Ray",
        job: "HR",
        des: "OKRs Report",
        count: "56",
      },
    ],
    Comments: [
      {
        name: "Ekarach Sripen",
        job: "Graphic Designer",
        des: "OKRs Report",
        count: "40",
      },
    ],
    Point: [
      {
        name: "Disapat Klomklong",
        job: "Creative",
        des: "OKRs Report",
        count: "37",
      },
    ],
    Diamond: [
      {
        name: "Amanda Ray",
        job: "HR",
        des: "OKRs Report",
        count: "39",
      },
    ]
  }
  const [view, setView] = useState({
    view: "1",
    title: "Like",
  });

  return (
    <div className="flex app">
      <div className="w100 display">
        <div className="box">
          <button 
          className={view.view === "1" ? "active" : ""}
          onClick={() =>
          {
            setView({
              view: "1",
              title: "Like",
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
              title: "Comments",
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
            })
          }}>
            Diamond
      </button>
        </div>
      </div>
      <div className="w100">
        {
          datas[view.title].map((item, i) =>
          {
            return (
              <Fragment key={`Card-${i}`}>
                <a href={`/OKRs?name=${item.name}&job=${item.job}`}>
                  <div className="containers">
                    <div className="display">
                      <div className="number">
                        {i}
                      </div>
                      <div className="cards">
                        <div className="border display">
                          <div className="display w60 flexWrap">
                            <div className="display w20">
                              <div className="auto">
                                <img className="img" src="https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/136-1366211_group-of-10-guys-login-user-icon-png.png?alt=media&token=253bb403-41dc-44ad-a442-4649eb672487" />
                              </div>
                            </div>
                            <div className="text ">
                              <div>{item.name}</div>
                              <div>{item.job}</div>
                              <div className="display" style={{ padding: "4px 0" }}>
                                <img className="icons auto" src="https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/img_341960.png?alt=media&token=83a52b27-58bf-4f3f-88c8-4699a8aa8afe" />
                                <div style={{ paddingLeft: "4px" }}>{item.des}</div>
                              </div>
                            </div>
                          </div>
                          <div className="like">
                            <div className="display auto">
                              <img className="img" src={"https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/facebook-like.svg?alt=media&token=0e9a05ef-20c8-4390-a124-7bd38309ed3b"} />
                            </div>
                            <div className="count">
                              {item.count} People Likes
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Fragment>
            )
          })
        }
      </div>
      <style jsx>{`
          .display
          {
            display:flex;
          }
          .flexWrap
          {
            flex-wrap: wrap;
          }
          .auto
          {
            margin: auto 0;
          }
          .cards
          {
            width: 95%;
            padding: 8px 8px;
          }
          .text
          {
            font-size: 10px;
            padding-left: 8px;
            width: 80%;
          }
          .w60
          {
            width:60%;
            
          }
          .img
          {
            width: 25px;
            height: 25px;
          }
          .icons
          {
            width: 7px;
            height: 7px;
          }
          .count
          {
            font-size:10px;
            margin: auto 0;
            padding-left: 8px;
          }
          .border
          {
            padding:4px;
            border-radius:4px;
            margin: auto;
          }
          .border :hover
          {
            box-shadow: 0px 3px 6px rgba(0,0,0, 0.16);
          }
          .number
          {
            background: black;
            color: white;
            width: 24px;
            height:24px;
            display: flex;
            justify-content: center;
            border-radius: 50%;
            padding: 4px;
            font-weight: 500;
            font-size:10px;
            margin: auto 0;
          }
          .flex
          {
            display:flex;
            flex-wrap:wrap;
            justify-content:start;
          }
          .like
          {
            display: flex;
            flex-direction: row;
            width: 40%;
            display: flex;
            justify-content: flex-end;
            padding-left: 6px;
            border-left: 1px solid #dee2e6;
          }
          .w100
          {
            width:100%;
          }
          .w20
          {
            width:20%;
            display:flex;
            justify-content: center;
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
          .containers
          {
            padding: 8px; 
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
