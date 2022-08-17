import React from 'react';
import ReactDOM from 'react-dom';

function Header() {
  return (
    <header>
      <nav>React Logo</nav>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>copyright 2022 Ali development. All rights reserved.</small>
    </footer>
  );
}

function Project() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Project />, document.getElementById('root'));
