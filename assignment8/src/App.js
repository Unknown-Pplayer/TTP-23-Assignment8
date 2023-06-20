import React from 'react';
import './App.css';
import SearchField from "./components/SearchField"
import GifCard from './components/GifCard';

function App() {
  return (
    <div className="App">
      <SearchField />
      <GifCard />
    </div>
  );
}

export default App;
