import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-flexbox-grid';
import AutoComplete from './AutoComplete';

export default function SplashPage() {
  return (
    <div>
      <h1>Fix Our City!</h1>
      <AutoComplete />
      <button>Get current Location</button>
      <button><Link to="/add-an-issue">Add Issue</Link></button>
      <button><Link to="/view-issues">View Issues</Link></button>
    </div>


  );
}
