import React from "react";

class PieChart extends React.Component{

    constructor(props){
        super(props);

        this.state= {data :{}};

    }

    componentDidMount(){
    this.createChart();
        
    }
    createChart=()=> {
        var Chart = require('chart.js');
        var ctx = document.getElementById("pieChart");
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data : {
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: [
                        'Pink',
                    'lightgreen',
                    'Blue']
                }],
            
                labels: [
                    'Pink',
                    'Green',
                    'Blue'
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

        <div style={{height:'100%',position:'relative'}}>

<canvas id="pieChart" width="100" height="100"></canvas>


        </div>
    )
}

}
export default PieChart;