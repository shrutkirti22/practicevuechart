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

const ResponsiveReactGridLayout = WidthProvider(Responsive);


export default class ShowcaseLayout extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: "lg",
      compactType: "vertical",
      mounted: false,
      layouts: { lg: props.initialLayout },
    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onCompactTypeChange = this.onCompactTypeChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onNewLayout = this.onNewLayout.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true });

    


  }

  componentDidUpdate(){
    // alert("component updated")
    const element = document.querySelector('#linechartId')
    const heightc = element.style.height
    console.log(heightc);
  //  alert(heightc)

  }

 static getDerivedStateFromProps(props,state){
    // alert("getDerivedStateFromProps")
        
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

  findcss(){
      }

  render() {
    const removeStyle = {
      position: "absolute",
      right: "18px",
      top: "14px",
      cursor: "pointer",
      zIndex: 1
    };

  

    return (
      <div>
        <div>
          Current Breakpoint: {this.state.currentBreakpoint} ({
            this.props.cols[this.state.currentBreakpoint]
          }{" "}
          columns)
        </div>
        <div>
          Compaction type:{" "}
          {_.capitalize(this.state.compactType) || "No Compaction"}
        </div>
        <button onClick={this.onNewLayout}>Generate New Layout</button>
        <button onClick={this.onCompactTypeChange}>
          Change Compaction Type
        </button>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          // WidthProvider option
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}

          rowHeight={90}

        >

          {/* {this.generateDOM()} */}
          <div key='1' id="linechartId" onChange={this.findcss} style={{}}>
            <span style={removeStyle} onClick={this.onClose}>
              <i class="fa fa-window-close text-primary" aria-hidden="true"></i></span>

            {/* <div id="closecomponent" onClick={this.onClose}> x</div> */}
            {/* <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">Profit </h6>
              </div>
              <div class="card-body"> */}
            <LineChart />
            {/* </div>
            </div> */}
          </div>

          {/* <div key="4"> <Hello /></div> */}

          <div key="2">
          <PieChart />
          </div>
            {/* <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">Data Sources</h6>
                <div class="dropdown no-arrow">
                  <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                    <div class="dropdown-header">Dropdown Header:</div>
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="chart-bar pt-4 pb-2">
                 
                </div>

              </div>
            </div> 
          </div>*/}

          <div key="3" id="BarChartId">
          <BarChart />
            {/* <div class="card shadow mb-4">
              <div class="card-header py-3 ">
                <h6 class="m-0 font-weight-bold text-primary float-left">Projects</h6>
                <span style={removeStyle} onClick={this.onCloseBar}>
                  <i class="fa fa-window-close text-primary" aria-hidden="true"></i></span>

              </div>
              <div class="card-body">
                <div class="chart-pie pt-4 pb-2">
                  <BarChart />
                </div>
              </div>
            </div>
 */}
          </div>

          <div key="4" id="PolarchartId">

            <div class="card shadow mb-4">
              <div class="card-header py-3 ">
                <h6 class="m-0 font-weight-bold text-primary float-left">Illustrations</h6>
                <span style={removeStyle} onClick={this.onClosePolar}>
                  <i class="fa fa-window-close text-primary" aria-hidden="true"></i></span>

              </div>
              <div class="card-body">

                <div class="chart-bar pt-4 pb-2">
                  <PolarChart />
                </div>

              </div>
            </div>

          </div>
          <div key="5" id="DoughnutChartId">


            <div class="card shadow mb-4">
              <div class="card-header py-3 ">
                <h6 class="m-0 font-weight-bold text-primary float-left">Overview</h6>
                <span style={removeStyle} onClick={this.onCloseDoughnut}>
                  <i class="fa fa-window-close text-primary" aria-hidden="true"></i></span>

              </div>
              <div class="card-body">

                <div class="chart-bar pt-4 pb-2">
                  <DoughnutChart />
                </div>

              </div>
            </div>
          </div>
          <div key="6" id="serverProgressId">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Server</h6>
              </div>
              <div class="card-body">
                <h4 class="small font-weight-bold">Server Migration <span class="float-right">20%</span></h4>
                <div class="progress mb-4">
                  <div class="progress-bar bg-danger" role="progressbar" style={{ width: '20%', ariaValuenow: "20", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                </div>

                <h4 class="small font-weight-bold">UAT Migration <span class="float-right">70%</span></h4>
                <div class="progress mb-4">
                  <div class="progress-bar bg-warning" role="progressbar" style={{ width: '70%', ariaValuenow: "70", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                </div>

                <h4 class="small font-weight-bold">Development Migration <span class="float-right">90%</span></h4>

                <div class="progress mb-4">
                  <div class="progress-bar bg-success" role="progressbar" style={{ width: '90%', ariaValuenow: "90", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                </div>
                <h4 class="small font-weight-bold">PipeLine <span class="float-right">60%</span></h4>

                <div class="progress mb-4">
                  <div class="progress-bar bg-info" role="progressbar" style={{ width: '60%', ariaValuenow: "60", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                </div>

              </div>
            </div>


          </div>






        </ResponsiveReactGridLayout>
        {/* <ResponsiveReactGridLayout >
          <div key="1">dcfsdfsdf1</div>
          <div key="2">2</div>
          <div key="3">3</div>
        </ResponsiveReactGridLayout> */}





      </div>
    );
  }
}

ShowcaseLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired
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
