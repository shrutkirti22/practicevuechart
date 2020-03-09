import React from "react";

class PolarChart extends React.Component{

    constructor(props){
        super(props);

        this.state= {data :{}};

    }

    componentDidMount(){
    this.createChart();
        
    }
    createChart=()=> {
        var Chart = require('chart.js');
        var ctx = document.getElementById("polarChart");
        var myPolarChart = new Chart(ctx, {
            type: 'polarArea',
            data : {
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: [
                        'lightgreen',
                    'Yellow',
                    'gray']
                }],
            
                labels: [
                    'Red',
                    'Yellow',
                    'Blue'
                ]
            },
            
            options: {animation:{animateRotate:true},
        }
        });
        
    }

render(){
    return(

        <div>

<canvas id="polarChart" width="30vh" height="30vw"></canvas>


        </div>
    )
}

}
export default PolarChart;