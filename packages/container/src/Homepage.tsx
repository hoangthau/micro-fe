import React from 'react';
import './App.css';

import Button from 'library/Button';
import { Link, Outlet } from 'react-router-dom';

function Homepage() {
  return (
    <div style={{ backgroundColor: '#dbdbdb', padding: 50 }}>
      <React.Suspense fallback="loading">
        <div style={{ marginBottom: 20 }}>
          And an even wittier subheading to boot. Jumpstart your marketing efforts with this example
          based on Apple's marketing pages.
        </div>
        <Button text="Learn More" onClick={() => {}}></Button>
        <br />
        <Link to="/app2">Go to app 2</Link>
        <Outlet />
      </React.Suspense>
    </div>
  );
}

export default Homepage;
