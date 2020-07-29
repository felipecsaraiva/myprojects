import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Feed from './components/Feed';

function App() {
  
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <Feed/>
      <Footer
      />
    </div>
  );
}

export default App;
