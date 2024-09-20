import React from 'react'
import "../css/Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1>Title</h1>
        <span>Explanation</span>
      </div>
      <div className="content-container">
        <div className="input-section">
          <input type="text" />
        </div>
        <div className="output-section">
          <span>The output</span>
        </div>
      </div>
    </div>
  )
}

export default Home