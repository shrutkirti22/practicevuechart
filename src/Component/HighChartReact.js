import React from "react";
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';



class HighChartReact extends React.Component
{
    constructor(props){
        super(props);

        this.state= {data :{}};

    }

    componentDidMount(){
            let chart = this.refs.chart.getChart();
            chart.series[0].addPoint({x: 10, y: 12});
        
    }

    createChart=()=> {
   

    }
    render(){
        const config = {
            title: {
              text: 'My chart'
            },
            series: [{
              data: [1, 2, 3]
            }]
          }
          
            return <ReactHighcharts config={config} ref="chart"></ReactHighcharts>;


        }
        }
      

export default HighChartReact;