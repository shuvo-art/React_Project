import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainComponent from "./components/MainComponent"
import logo from './logo.svg';
import './style.css';

function App() {
  return (
      <div>
          <Header />
          <MainComponent />
          <Footer />
      </div>
  )
}

export default App;
