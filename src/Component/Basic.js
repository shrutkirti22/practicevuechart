import React ,{ useState } from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import PolarChart from './PolarChart';
import DoughnutChart from './DoughnutChart';

import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { Responsive, WidthProvider } from "react-grid-layout";
// import { Button,Modal,setShow } from 'react-bootstrap';


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
      show :false,
      setShow : false,
      vArray : [],
      tArray : []
    }
  
  
  }

  // handleClose = (e) => {
  //   this.setState({setShow:false})
  // };
  // handleShow =(e) => {
  //   this.setState({setShow:true})
  // };

  passValue = (e)=>{

    let v=[30,59,80]
    let t=['a','b','c']
    this.setState({vArray:v});
    this.setState({tArray:t})
  }

  render() {
    const layout = [
    ];

alert(this.state.vArray)
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
        <button data-toggle="modal" data-target="#yupModal">modal</button>
        <button onClick={this.passValue}> pass value</button>


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
            <span style={removeStyle}>
              {/* <i class="fa fa-window-close text-primary" aria-hidden="true"> */}
              <i class="fa fa-cog text-danger" aria-hidden="true" data-toggle="modal" data-target="#yupModal"></i>
            </span>
              {/* {check} */}
            {/* <LineChart xaxis = {this.state.xaxis}/>  */}
            <BarChart  yax={this.state.vArray} xax={this.state.tArray} handleStateChange = {this.passValue} />

          </div>

          <div class="modal fade" id="yupModal" tabindex="-1" role="dialog" aria-labelledby="yupModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="yupModalLabel">Select Data </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form >
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label">Data Source</label>
                    <div class="col-sm-8">
                      <select value={this.state.dataSource} name="dataSource" class="custom-select" onChange={this.onChange}>
                        <option disabled value="">select Data source</option>
                        <option value="userTrends">User Trends</option>
                        <option value="userdata">User data</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword" class="col-sm-4 col-form-label">X-Aixis</label>
                    <div class="col-sm-8">
                      <select value={this.state.xaxis} name="xaxis" class="custom-select" onChange={this.onChange}>
                        <option disabled value="">select x-axis</option>
                        <option value="Jio-media">Jio-media</option>
                        <option value="record">record</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="inputPassword" class="col-sm-4 col-form-label">Y-Aixis</label>
                    <div class="col-sm-8">
                      <select value={this.state.yaxis} name="yaxis" class="custom-select" onChange={this.onChange}>
                        <option disabled value="">select y-axis</option>

                        <option value="userTrends">User Count</option>
                      </select>
                    </div>
                  </div>

                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" onClick={this.CreateChart}  class="btn btn-primary">Create chart</button>
              </div>
            </div>
          </div>

        </div>

          <div key="2">
            <PieChart />
          </div>



        </ResponsiveReactGridLayout>

        {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

            </div>
          </div>

        </div>

    )
  }
}
export default Basic;

