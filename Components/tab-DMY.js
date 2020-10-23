import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Daily from './Date/index'
import Weekly from './Weekly/index'
import NotAnalysis_Weekly from './NotAnalysis/index'


const Example = (props) =>
{
  const [activeTab, setActiveTab] = useState('1');
  const [analysis, setAnalysis] = useState("analysis");
  const toggle = tab =>
  {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs style={{ maxWidth: "100%" , marginLeft:"0px" }}>
        <NavItem style={{ width: "26%" }} className="color">
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            style={{ padding: "8px", textAlign: "center" }}
          >
            Daily
          </NavLink>
        </NavItem>
        <NavItem style={{ width: "26%" }} className="color">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
            style={{ padding: "8px", textAlign: "center" }}
          >
            Weekly
          </NavLink>
        </NavItem>
        <NavItem style={{ width: "26%" }} className="color">
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
            style={{ padding: "8px", textAlign: "center" }}
          >
            Monthly
          </NavLink>
        </NavItem>
        <div
          className={`${analysis === "analysis" ? "active" : ""}`}
          style={{ width: "11%", display: "flex" }} >
          <NavLink
            onClick={() => { setAnalysis("analysis") }}
            style={{padding:"0px",width:"100%",margin:"auto",textAlign:"center"}}
          >
            <img style={{ width: "20px", height: "20px" }} src={"https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/graph_318-10306.png?alt=media&token=fb87e89f-abad-4f84-bfc0-036e3ae4605b"} />
          </NavLink>
        </div>
        <div
          className={`${analysis === "analysis" ? "" : "active"}`}
          style={{ width: "11%", display: "flex" }} >
          <NavLink
            onClick={() => { setAnalysis("") }}
            style={{padding:"0px",width:"100%",margin:"auto",textAlign:"center"}}
          >
            <img style={{ width: "20px", height: "20px" }} src={"https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/list-24px.svg?alt=media&token=852b622c-8ea1-4263-aaa3-1347e25da785"} />
          </NavLink>
        </div>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          {
            analysis === "analysis" ?
              <Row>
                <Col sm="12">
                  <h4></h4>
                  <div className="flex padding">
                    <Daily
                      head={"Like"}
                      many={"Likes"}
                      count={"34"}
                    />
                    <Daily
                      head={"Comment"}
                      many={"Comments"}
                      count={"56"}
                    />
                    <Daily
                      head={"Point"}
                      many={"Point"}
                      count={"450"}
                    />
                    <Daily
                      head={"Diamond"}
                      many={"Diamond"}
                      count={"40"}
                    />
                  </div>
                </Col>
              </Row>
              :
              <Row>
                <Col sm="12">
                  <h4>Daily not analysis</h4>
                </Col>
              </Row>
          }
        </TabPane>
        <TabPane tabId="2">
          {
            analysis === "analysis" ?
              <Weekly />
              :
              <NotAnalysis_Weekly />
          }
        </TabPane>
        <TabPane tabId="3">
          {
            analysis === "analysis" ?
              <Row>
                <Col sm="12">
                  <h4>Monthly analysis</h4>
                </Col>
              </Row>
              :
              <Row>
                <Col sm="12">
                  <h4>Monthly not analysis</h4>
                </Col>
              </Row>
          }
        </TabPane>
      </TabContent>
      <style jsx>{`
          .active , .nav-link.active
          {
            color: white!important;
            background-color:#3766ff!important;
          }
          .flex
          {     
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              text-align: center;
          }
          .padding
          {
            padding: 16px;
          }
      `}</style>
    </div>
  );
}

export default Example;