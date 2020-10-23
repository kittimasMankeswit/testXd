import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Tab_DMY from '../Components/tab-DMY'
const Example = (props) =>
{
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab =>
  {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs >
        <NavItem style={{ width: "50%" }} className="color">
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            style={{ textAlign: "center" }}
          >
            Submission
          </NavLink>
        </NavItem>
        <NavItem style={{ width: "50%" }} className="color">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
            style={{ textAlign: "center" }}
          >
            Engagement
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} style={{ marginLeft: "15px" }}>
        <TabPane tabId="1" >
          <Row style={{ maxWidth: "100%" }}>
            <Col sm="12">
              Submission
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row style={{ maxWidth: "100%" }}>
            <div className="flex">
              <div className="w100">
                <Tab_DMY />
              </div>
            </div>
          </Row>
        </TabPane>
      </TabContent>
      <style jsx>{`
        .flex
        {
          display:flex;
          width:100%;
        }
        .w100
        {
          width:100%;
        }
      `}</style>
    </div>
  );
}

export default Example;