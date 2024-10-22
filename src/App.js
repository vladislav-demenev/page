import React from 'react';
import Header from './components/Header'; 
import './css/style.css';

function App() {
  return (
    <div className="App">
      <Header /> {/* Используем компонент Header */}
      {/* Остальной контент страницы */}
    </div>
  );
}

export default App;
