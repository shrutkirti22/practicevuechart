import React from "react";
import ReactDOM from "react-dom";
import ShowcaseLayout from "./ShowcaseLayout";
import axios from 'axios';
import Header from './Header';
import SideBar from "./SideBar";
class ExampleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { layout: [] };
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.saveLayout = this.saveLayout.bind(this);
  }

  onLayoutChange(layout) {
    this.setState({ layout: layout });
  }

  saveLayout(){
    console.log(JSON.stringify(this.state.layout))
    var layout = this.state.layout;
    var name ="layout 2";
    if(layout!=""){
    axios.post('http://localhost:4000/bars/saveLayout', {name , layout })
      .then((result) => {
        console.log(result);
        alert("sucess");
       
      })
    }

  }
  stringifyLayout() {
    return this.state.layout.map(function(l) {
      return (
        <div>
        <div className="layoutItem" key={l.i} style={{backgroundColor:'yellow'}}>
          <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
        </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.heightc);
    
    return (
      <div>
        {/* <div className="layoutJSON">
          Displayed as <code>[x, y, w, h]</code>:
          <div className="columns" >{this.stringifyLayout()}</div>
        </div> */}
        {/* <button onClick={this.saveLayout()}>Save</button> */}

        <ShowcaseLayout onLayoutChange={this.onLayoutChange} myLayout={this.state.layout}/>
        {/* <Header lay={this.state.layout}/> */}
        

      </div>
    );
  } 
}

// const contentDiv = document.getElementById("root");
// const gridProps = window.gridProps || {};
// ReactDOM.render(React.createElement(ExampleLayout, gridProps), contentDiv);

export default ExampleLayout;
