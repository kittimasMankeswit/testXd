import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
const DEFAULT_QUERY = {
  name: '',
};
const Comp = ({

}) =>
{
  const [query, setQuery] = useState(DEFAULT_QUERY);
  useEffect(() =>
  {
    const search = window.location.pathname;
    setQuery(search);

  }, []);
  return (
    <Navbar expand="lg" style={{ textAlign: "center", position: "relative", background: "#3766ff" }}>
      <Navbar.Brand style={{ width: "100%" }}>
        <div style={{color:"white"}}>
          {
            query == "/"
              ? "All Report"
              : "OKRs Report"
          }
        </div>
      </Navbar.Brand>
      <div style={{ position: "absolute" }}>
        <a href="/">
          <img src="https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/home-white-18dp%20(1).svg?alt=media&token=be9e7713-9c91-4269-ab35-c604812b8e9d" />
        </a>
      </div>
    </Navbar>
  );
}

export default Comp;



