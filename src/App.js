import React from 'react';
import './App.css';
import HeaderTabs from './HeaderTabs/HeaderTabs';
import Home from './Home/Home';
import About from './About/About';
import MyWork from './MyWork/MyWork'
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <HeaderTabs></HeaderTabs>
      <Home></Home>
      <About></About>
      <MyWork></MyWork>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
