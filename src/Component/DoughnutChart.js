import React from "react";

class DoughnutChart extends React.Component{

    constructor(props){
        super(props);

        this.state= {data :{}};

    }

    componentDidMount(){
    this.createChart();
        
    }
    createChart=()=> {
        var Chart = require('chart.js');
        var ctx = document.getElementById("doughnutChart");
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data : {
                datasets: [{
                    data: [30, 80, 30,40],
                    backgroundColor: [
                        'skyblue',
                    '#2C7584',
                    '#01AAE1',
                    '#19303F'
                ]
                }],
            
                labels: [
                    'Customer Support',
                    'Marketing',
                    'Sales',
                    'Other'
                ]
            },
            
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation:{animateRotate:true},
         }
        });
        
    }

render(){
    return(

        <div style={{height:"100%",position:"relative"}}>
            <canvas id="doughnutChart" width="100" height="100"></canvas>
        </div>
    )
}

}
export default DoughnutChart;