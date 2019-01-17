import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="./Home">EliasX801</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="./News">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Schedule">Schedule</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/EliasX801">Twitch</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/xELIASx801">Twitter</a>
            </li>
          </ul>
            <a href="./Login"><button className="btn btn-secondary my-2 my-sm-0">Log In</button></a>
        </div>
      </nav>
    );
  }

export default Navbar;