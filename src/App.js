import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  //const title = 'Trust Reviews WebPage';
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
