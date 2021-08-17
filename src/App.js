import { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';


  class App extends Component {
    render() {
      return (
        <>
        <Header/>
        <Main/>
        <Footer/>
        </>
    );
  }
  }

export default App;

