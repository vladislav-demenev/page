// src/components/Header.js

import React from 'react';

function Header() {
  return (
    <header>
      <h1>My Website Header</h1>
      <nav>
        <ul>
          <li><a href="/ru/index.html">Русская версия</a></li>
          <li><a href="/en/index.html">English Version</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
