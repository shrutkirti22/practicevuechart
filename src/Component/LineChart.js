import React from "react";
import equal from 'fast-deep-equal'

let playername = [];  
let runscore = [];  


class LineChart extends React.Component
{
    constructor(props){
        super(props);

        this.state= {data :{},
        xaxisValue: this.props.xax
    
    };

    }

    componentDidMount(){
            this.createChart();

    }

    componentWillMount(){
        // alert("yes")
    }

    componentDidUpdate(prevProps){
        alert("did update")
        alert(this.props.xax)
        alert(prevProps.xax)
        if(!equal(this.props.xax, prevProps.xax)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
  {
    this.createChart();
    
  }


    }
    componentWillReceiveProps(nextprops){
    // alert(JSON.stringify(nextprops))
    this.setState({xaxisValue : nextprops.xax})
    console.log(this.state.xaxisValue )

    if (typeof(this.props.xax) !== 'undefined' || this.props.xax != null) {
    }

    }
    createChart=()=> {
        var Chart = require('chart.js');

        var ctx = document.getElementById('myChart').getContext('2d');
        var ctx = document.getElementById("myChart");
// ctx.height = 100

console.log(this.state.xaxisValue);
const xso =this.props.xax
// alert(xso)
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:xso? xso:["a","b","c","d"],
        datasets: [{
            label: '# runs',
            data: this.props.yax === undefined ? [20,74,42,30]:this.props.yax,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
               
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                stacked :true
            }]
        }
    }
});


    }
    render(){
        console.log("inside line chart");
            console.log(this.props.xax);
            console.log(this.props.yax);
            // this.createChart();

        return(
            <div style={{height:'100%',position:'relative'}}>
                <canvas id="myChart"  ></canvas>
                </div>

        )}
        }
      

export default LineChart;