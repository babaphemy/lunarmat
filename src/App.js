import React from 'react'
import './assets/css/main.css';
import Home from './components/Home';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <Footer />
    </div>
  );
}

export default App;
