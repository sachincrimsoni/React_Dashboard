import React from 'react';
import Header from './website/Header'
import Footer from './website/Footer'
import Home from './website/Home'
import Admin_header from './admin/Header'
import Admin_footer from './admin/Footer'
import Admin_home from './admin/Home'

function App() {
  return (
    <div className="App">
         <Header/>
         <Home/>
         <Footer/>
         <hr/>
         <Admin_header/>
         <Admin_home/>
         <Admin_footer/>
    </div>
  );
}

export default App;
