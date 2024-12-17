import React from 'react'
import './css/Changelog.scss';

function Changelog() {
  return (
    <div className="changelog">
      <div className="log">
        <h1>Alpha 2.2!</h1>
        <span>This is the second major version of the site, second minor update, as of 12/16/24</span>
        <ul>
          <li>Tweaked the AI model and database to included movies up to October 2024</li>
          <li>Movies now display with a poster</li>
          <li>Improved search bar and results display (they now disappear and reappear when necessary)</li>
        </ul>
        <span>Things to do immediately:</span>
        <ul>
          <li>Update the database again, prune movies more effectively</li>
          <li>Make sure movies from the same collection are not recommended (don't get flooded with Spider-Man)</li>
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