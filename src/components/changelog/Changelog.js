import React from 'react'
import './css/Changelog.scss';

function Changelog() {
  return (
    <div className="changelog">
      <div className="log">
        <h1>Alpha 1!</h1>
        <span>This is the first build of the website, completed on 10/2/24</span>
        <ul>
          <li>frontend, backend, and db deployed online via docker compose</li>
          <li>core functionality of the website is implemented</li>
        </ul>
        <span>Things to do immediately:</span>
        <ul>
          <li>Make the website mobile friendly</li>
          <li>Style the place up (add pictures and make everything look pretty)</li>
          <li>Tweak the weights and experiment more with the AI model</li>
        </ul>
        <span>Things to do in the future?</span>
        <ul>
          <li>User accounts to save movies that they have seen so they can cut them from results</li>
        </ul>
      </div>
    </div>
  )
}

export default Changelog