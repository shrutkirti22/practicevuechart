import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleLayout from './Component/ExampleLayout';
import Basic from './Component/Basic';
import Header from './Component/Header';
import SideBar from './Component/SideBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Parent from './Component/Parent';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../public/modal.css'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Parent/> */}

                <Router>
                {/* <Route path="/" exact component={BarChart} /> */}
                <Route path="/lineChart" component={ExampleLayout} />
                {/* <Route path= "/BarChart" component={Basic}/> */}
                </Router>
      {/* <Basic/> */}
        {/* <ExampleLayout/> */}
 
    </div>
  );
}

export default App;
