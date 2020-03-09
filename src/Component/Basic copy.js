import React from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import PolarChart from './PolarChart';
import DoughnutChart from './DoughnutChart';

import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { Responsive, WidthProvider } from "react-grid-layout";


const ResponsiveReactGridLayout = WidthProvider(Responsive);


class Basic extends React.Component {

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
    }}

  render() {
    const layout = [
    ];

    const removeStyle = {
      position: "absolute",
      right: "18px",
      top: "14px",
      cursor: "pointer",
      zIndex: 1
    };

    return (



      <div id="content-wrapper" class="d-flex flex-column">

        <div id="content">
          <div class="container-fluid">

            <div class=" align-items-center justify-content-between mb-4">
            </div>

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

          <div key='1' id="linechartId" style={{}}>
            <span style={removeStyle} onclick={this.openModal}>
              {/* <i class="fa fa-window-close text-primary" aria-hidden="true"> */}
              <i class="fa fa-cog text-danger" aria-hidden="true" data-toggle="modal" data-target="#exampleModal"></i>
            </span>
              {/* {check} */}
            <LineChart xaxis = {this.state.xaxis}/> 
          </div>


          <div key="2">
            <PieChart />
          </div>



        </ResponsiveReactGridLayout>

            <div class="row">

              <div class="col-xl-3 col-lg-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Retail (Monthly)</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">$4440,000</div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Cinema (Annual)</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">$21455,000</div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Jio Net (Annual)</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">$845,000</div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Rel Jewels (Annual)</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">$879,000</div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">

              <div class="col-xl-9 col-lg-7">
                <div class="card shadow mb-4">
                  <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Profit </h6>
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
                    <div class="chart-area">
                      <LineChart  />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-5">
                <div class="card shadow mb-4">
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
                      <PieChart />
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div class="row">

              <div class="col-lg-6 mb-4">

                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                  </div>
                  <div class="card-body">
                    <div class="chart-pie pt-4 pb-2">
                      <BarChart />
                    </div>


                  </div>
                </div>

                {/* <div class="row">
    <div class="col-lg-6 mb-4">
      <div class="card bg-primary text-white shadow">
        <div class="card-body">
          Primary
          <div class="text-white-50 small">#4e73df</div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card bg-success text-white shadow">
        <div class="card-body">
          Success
          <div class="text-white-50 small">#1cc88a</div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card bg-info text-white shadow">
        <div class="card-body">
          Info
          <div class="text-white-50 small">#36b9cc</div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card bg-warning text-white shadow">
        <div class="card-body">
          Warning
          <div class="text-white-50 small">#f6c23e</div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card bg-danger text-white shadow">
        <div class="card-body">
          Danger
          <div class="text-white-50 small">#e74a3b</div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card bg-secondary text-white shadow">
        <div class="card-body">
          Secondary
          <div class="text-white-50 small">#858796</div>
        </div>
      </div>
    </div>
  </div> */}

              </div>
              {/* 
<div class="col-lg-3 mb-4">

  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
    </div>
    <div class="card-body">
      
      <div class="chart-bar pt-4 pb-2">
                    <PolarChart/>
                  </div>
               
    </div>
  </div>
</div> */}
              <div class="col-lg-6 mb-4">

                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Reliance Development</h6>
                  </div>
                  <div class="card-body">
                    <p>Reliance Retail Limited is a subsidiary company of Reliance Industries Limited. Founded in 2006, it is the largest retailer in India in terms of revenue. V Subramaniam is the CEO of the Venture. Its retail outlets offer foods, groceries, apparel and footwear, lifestyle and home improvement products, electronic goods, and farm implements and inputs</p>
                    <p class="mb-0">Reliance Industries became the first Indian company to exceed $100 billion market</p>
                  </div>
                </div>


              </div>

            </div>

            <div class="row">

              <div class="col-lg-6 mb-4">

                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
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

              <div class="col-lg-3 mb-4">

                <div class="card shadow mb-4">
                  <div class="card-header py-3 ">
                    <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
                  </div>
                  <div class="card-body">

                    <div class="chart-bar pt-4 pb-2">
                      <PolarChart />
                    </div>

                  </div>
                </div>
              </div>


              <div class="col-lg-3 mb-4">

                <div class="card shadow mb-4">
                  <div class="card-header py-3 ">
                    <h6 class="m-0 font-weight-bold text-primary">Overview</h6>
                  </div>
                  <div class="card-body">

                    <div class="chart-bar pt-4 pb-2">
                      <DoughnutChart />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div></div>

    )
  }
}
export default Basic;

