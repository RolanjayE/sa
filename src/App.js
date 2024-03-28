import React from 'react';
import Hero from "./components/hero"
import Navbar from './components/navbar';
import Card from './components/card';
import Store from './components/store';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Store />
    </div>
  );
}

export default App;
