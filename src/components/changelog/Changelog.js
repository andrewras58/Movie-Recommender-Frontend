import React from 'react'
import './css/Changelog.scss';

function Changelog() {
  return (
    <div className="changelog">
      <div className="log">
        <h1>Alpha 2.3!</h1>
        <span>This is the second major version of the site, third minor update, as of 12/20/24</span>
        <ul>
          <li>Tweaked the AI model and database to include movies up to December 2024</li>
          <li>Movies from the same series are no longer recommended (only direct sequels)</li>
        </ul>
        <span>Things to do immediately:</span>
        <ul>
          <li>Retool the weights for the AI to get better recommendations</li>
          <li>Make the website mobile friendly</li>
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