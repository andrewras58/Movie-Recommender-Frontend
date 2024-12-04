import React from 'react'
import './css/Changelog.scss';

function Changelog() {
  return (
    <div className="changelog">
      <div className="log">
        <h1>Alpha 2.1!</h1>
        <span>This is the second major version of the site, completed on 12/4/24</span>
        <ul>
          <li>Tweaked the AI model and database to included movies up to October 2024</li>
          <li>Movies now display with a poster</li>
        </ul>
        <span>Things to do immediately:</span>
        <ul>
          <li>Make the website mobile friendly</li>
          <li>Style the search bar and results</li>
          <li>Update the database again, prune movies more effectively</li>
        </ul>
        <span>Things to do in the future?</span>
        <ul>
          <li>User accounts to save movies that they have seen so they can cut them from results</li>
          <li>Prune movies by making sure ones from the same series are not recommended (don't get flooded with Spider-Man)</li>
        </ul>
      </div>
    </div>
  )
}

export default Changelog