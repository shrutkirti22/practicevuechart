import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import Hello from "./Hello";
import LineChart from "./LineChart";

import BarChart from './BarChart';
import PieChart from './PieChart';
import PolarChart from './PolarChart';
import DoughnutChart from './DoughnutChart';
import FormSearchModal from './FormSearchModal';

import axios from 'axios';
import $ from 'jquery';

var jsdata = require('../../src/data');

const ResponsiveReactGridLayout = WidthProvider(Responsive);


export default class ShowcaseLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: "lg",
      compactType: "vertical",
      mounted: false,
      layouts: { lg: props.initialLayout },
      compareData: '',
      monthArray: [],
      dataSource: '',
      xaxis: '',
      yaxis: '',
      flag: false,
      dataSourceArray: [],
      vArray: [],
      tArray: [],
      wholeFirstObj: []

    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onCompactTypeChange = this.onCompactTypeChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onNewLayout = this.onNewLayout.bind(this);
  }

  componentDidMount() {
    // alert(JSON.stringify(this.state.layouts))
    this.setState({ mounted: true });
    const RelianceData = jsdata

    let myarray = RelianceData
    var keys = Object.keys(myarray);
    var valuew = Object.values(myarray.ProjectFlowCount)
    console.log(valuew);
    this.setState({wholeFirstObj: valuew});
    var firstObj = valuew[0];
    // firstObj.forEach(function(fitem){
    //   console.log(fitem);
    // })
    let dataArray = [];
    keys.forEach(function (el) {
      console.log(el)
      dataArray.push(el);

    })
    for (var property in valuew) {
      console.log(valuew[property]); // Outputs: foo, fiz or fiz, foo
    }
    valuew.forEach(function (i) {
      console.log(i);

    })
    this.setState({ dataSourceArr1ay: dataArray })

    $.each(dataArray, function (index, value) {
      $('#dataSourceId').append('<option value="' + value + '">' + value + '</option>');


    });

    for (var i in myarray) {
      console.log(i);

      console.log(myarray[i]);
    }

    axios
      .get("http://localhost:4000/bars/GetCompareData")
      .then(response => {
        console.log(response)
        this.setState({
          compareData: response
        });
        //  console.log(this.state.compareData);
        console.log(this.state.compareData);

        let data = this.state.compareData.data
        console.log(data);
        let monthArray = [];
        for (let k = 0; k <= data.length; k++) {
          console.log(data[k]);
          console.log(data[k].month);
          monthArray = data[k].month
          var joined = this.state.monthArray.concat(data[k].month);
          this.setState({ monthArray: joined })

        }

        // for (key in data) {
        console.log(this.state.monthArray);

      })

      .catch(error => console.log(error.response));




  }

  componentDidUpdate() {
    // alert("component updated")
    const element = document.querySelector('#linechartId')
    const heightc = element.style.height
    console.log(heightc);

  }

  static getDerivedStateFromProps(props, state) {
    // alert("getDerivedStateFromProps")
    console.log(state);

  }

 
  generateDOM() {
    return _.map(this.state.layouts.lg, function (l, i) {
      return (
        <div key={i} className={l.static ? "static" : ""}>
          {l.static ? (
            <span
              className="text"
              title="This item is static and cannot be removed or resized."
            >
              Static - {i}
            </span>
          ) : (
              <span className="text">{i}</span>
            )}
        </div>
      );
    });
  }

  onBreakpointChange(breakpoint) {
    this.setState({
      currentBreakpoint: breakpoint
    });
  }

  onCompactTypeChange() {
    const { compactType: oldCompactType } = this.state;
    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
          ? null
          : "horizontal";
    this.setState({ compactType });
  }

  onLayoutChange(layout, layouts) {
    console.log("on layout change");
    console.log((layout,layouts));
    
    
    this.props.onLayoutChange(layout, layouts);
  }

  onNewLayout() {
    this.setState({
      layouts: { lg: generateLayout() }
    });
  }

  onClose = (e) => {
    document.getElementById("linechartId").style.display = "none";

  }

  onCloseBar = (e) => {
    document.getElementById("BarChartId").style.display = "none";

  }

  onCloseDoughnut = (e) => {
    document.getElementById("DoughnutChartId").style.display = "none";

  }

  onClosePolar = (e) => {
    document.getElementById("PolarchartId").style.display = "none";

  }

  onSearch = () => {
  }

  componentDidUpdate(prevProps, prevState, snapshot)
{
  console.log("didupdate");
  
  console.log(prevProps);
  
}

  CreateChart = (e) => {
    console.log("value received ");
    
    const RelianceData = jsdata

    let myarray = RelianceData
    var keys = Object.keys(myarray);
    var valuew = Object.values(myarray.ProjectFlowCount)
    console.log(valuew);
    this.setState({wholeFirstObj: valuew});

    // alert(JSON.stringify(this.props.myLayout))
    this.setState({ flag: true })
    let trackArray = [], valueArray = [];

    jsdata.ProjectFlowCount.forEach(function (obj) {
      trackArray.push(obj.Track);
      valueArray.push(obj.Value);
    })
    this.handleStateChange(trackArray, valueArray);
    console.log(trackArray)
    console.log(valueArray)

    this.setState({ vArray: valueArray })
    this.setState({ tArray: trackArray })
    



// this.onLayoutChange()
this.onNewLayout();

var el = document.getElementById('exampleModal');
el.style.display = "none"
$('.modal-backdrop').hide();

// var x = document.getElementsByClassName("modal-backdrop fade show");
// x.style.display = "none"
// x.setAttribute("id", "hideDiv");
// el.modal({show: false})
// exampleModal
// $('#myModal').modal({
//   keyboard: false
// })
  
  }

  handleStateChange = (x, y) => {
    let xvalue = this.state.xaxis;
    this.setState({ xaxis: x })
    this.setState({ yaxis: y })

  }

  onChange = (e) => {
    console.log([e.target.name], e.target.value);

    this.setState({ [e.target.name]: e.target.value });
  }





  

//   static getDerivedStateFromProps(props, state)
// {
//   alert("getderives")
// }
  // shouldComponentUpdate(nextProps, nextState) {
  //   // alert(1)

  //   console.log("shouldComponentUpdate");

  //   console.log(nextState);
  //   // if(this.state.dataSource != nextState.dataSource){
  //   //   return true
  //   // }
  //   if(nextState.flag){
  //   if(nextState.vArray != "" && nextState.tArray != "" ) 
  //   {
  //     console.log("inside scu");

  //     return true
  //   }
  // }
    
  // }

  componentDidUpdate() {
    // alert("yes")
    
    if (this.state.flag) {
      console.log("inside");

    }

  }
  

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps){
      // alert("not same")
    console.log(JSON.newProps);
    
    }
  }


  onDataSourceChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    var selectedId = document.getElementById('dataSourceId').value;
    let myarray
    document.getElementById("xid").options.length = 0;
    document.getElementById("yid").options.length = 0;

    if (selectedId == "ProjectFlowCount") {

      myarray = ['Track', 'Value']
    }
    else {
      myarray = ['Stream', 'CurUsers']
    }

    $.each(myarray, function (index, value) {
      // APPEND OR INSERT DATA TO SELECT ELEMENT.
      $('#xid').append('<option value="' + value + '">' + value + '</option>');
      $('#yid').append('<option value="' + value + '">' + value + '</option>');

    });

  }


 

  render() {
    const removeStyle = {
      position: "absolute",
      right: "18px",
      top: "14px",
      cursor: "pointer",
      zIndex: 1
    };
    // alert(this.state.vArray);
    // alert(this.state.tArray);
    const flagline = this.state.flag;
    let check;

    if (flagline) {
      const RelianceData = jsdata

      // const myobj = RelianceData.ProjectFlowCount
      // var trackArray = [], valueArray = [];

      // alert("yooooooooooooo")
      // jsdata.ProjectFlowCount.forEach(function (obj) {
      //   trackArray.push(obj.Track);
      //   valueArray.push(obj.Value);
      // })

      // console.log(trackArray);
      // console.log(valueArray);

      // alert(flagline)
      // check = <LineChart yax = {[2200,1400,6000,8222]} xax={['Jio Music','Jio Cinema','Jio TV','Jio Fiber']} />
      // check = <BarChart yax = {valueArray} xax={trackArray} />
      //       {this.state.flag ? <BarChart yax = {[500,250,750,20050]} xax={['BIN','ACQ','BNP','CSD']} />:<BarChart/>}

      // check = <Hello xaxis = {this.state.xaxis}/>
      console.log(check);

    }


    return (
      <div>

        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          // WidthProvider option
          measureBeforeMount={true}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
          rowHeight={90}

        >

          <div key='1' id="linechartId" style={{}}>
            <span style={removeStyle} >
              {/* <i class="fa fa-window-close text-primary" aria-hidden="true"> */}
              <i class="fa fa-cog text-danger" aria-hidden="false" data-toggle="modal" data-target="#exampleModal"></i>
            </span>

            {/* {this.state.flag ? <BarChart yax = {valueArray} xax={trackArray} />:<BarChart/>} */}

            {/* <BarChart {...this.props} yax = {valueArray}  xax={trackArray} /> */}
            <BarChart {...this.props} yax={this.state.vArray} xax={this.state.tArray} myObj = {this.state.wholeFirstObj} /> 
            {/* <hello xax={this.state.tArray} update={this.update}/> */}

          </div>
          {/* 

          <div key="2">
            <PieChart />
          </div> */}



        </ResponsiveReactGridLayout>


        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Select Data </h5>
                <button id="closeId" type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form >
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label">Data Source</label>
                    <div class="col-sm-8">
                      <select value={this.state.dataSource} id="dataSourceId" name="dataSource" class="custom-select" onChange={this.onDataSourceChange}>
                        <option disabled value="">select Data source</option>

                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword" class="col-sm-4 col-form-label">X-Aixis</label>
                    <div class="col-sm-8">
                      <select value={this.state.xaxis} id="xid" name="xaxis" class="custom-select" onChange={this.onChange}>
                        <option disabled value="">select x-axis</option>
                        {/* <option value="Jio-media">Jio-media</option>
                        <option value="record">record</option> */}
                      </select>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inputPassword" class="col-sm-4 col-form-label">Y-Aixis</label>
                    <div class="col-sm-8">
                      <select value={this.state.yaxis} id="yid" name="yaxis" class="custom-select" onChange={this.onChange}>
                        <option disabled value="">select y-axis</option>

                        {/* <option value="userTrends">User Count</option> */}
                      </select>
                    </div>
                  </div>

                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" onClick={this.CreateChart} class="btn btn-primary">Create chart</button>
              </div>
            </div>
          </div>

        </div>
<div>

</div>


        {/* 
    <div><LineChart xyo = {this.state.xaxis}/></div>
    <div>{check}</div> */}
      </div>
    );
  }
}

ShowcaseLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired,
  
};

ShowcaseLayout.defaultProps = {
  className: "layout",
  rowHeight: 30,
  onLayoutChange: function () { },
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  initialLayout: generateLayout()
};

function generateLayout() {
  return _.map(_.range(0, 25), function (item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05
    };
  });
}
