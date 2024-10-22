// src/App.js

import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Добро пожаловать на главную страницу!</h2>
        <p>Это простой сайт с навигацией.</p>
      </main>
    </div>
  );
}

export default App;
