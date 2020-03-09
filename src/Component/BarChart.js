import React from "react";
// import axios from 'axios';  
import equal from 'fast-deep-equal'


let playername = [];
let runscore = [];
var Chart = require('chart.js');
var ctx
var doChart
class BarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            xaxisv: this.props.xax,
            yaxisv: this.props.yax,
            chartDataset: []
        }

    }

    componentDidMount() {
        console.log("lllllllllllll");

        console.log(this.props.handleStateChange);

        this.setState({ xaxisv: this.props.xax })
        this.setState({ yaxisv: this.props.yax })
        ctx = document.getElementById("doChart");

        // var url="http://localhost:4000/bars/GetFormRecord"
        // // http://localhost:4000/bars/Getrecord

        // axios.get(url)  
        //                     .then(res => {  
        //                                 console.log(res);  
        //                                 const ipl = res.data;  

        //                                 ipl.forEach(record => {  
        //                                         playername.push(record.month);  
        //                                         runscore.push(record.profit);  

        //                                 });  

        //     })
        this.createChart();


    }

    getRandomColor=() =>{
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    

    prepareBarChartData=(cName,cData)=>{
        let dataColor = this.getRandomColor();
        return{
            label :cName,
            data : cData,
            barPercentage: 5,
            barThickness: 50,
            maxBarThickness: 20,
            minBarLength: 2,
            backgroundColor: dataColor
        }

    }
    componentDidUpdate(prevProps) {
        console.log("barchart");
        console.log(prevProps);

        let data = this.props.myObj  
        let tempDataset = []
        // alert(JSON.stringify(this.props.myObj))

        for (var item in data) {

            if (data.hasOwnProperty(item)) {
                // var labelData = data
                // var chartData = data
        // alert(item)
        // alert(data[item].Track)
                let datasetObject =this.prepareBarChartData(data[item].Track, data[item].Value);
                tempDataset.push(datasetObject);
                console.log("--------------");
                console.log(tempDataset);

                
            }
        }

            
            // alert(tempDataset)
            // doChart.datasets.push({
            //     tempDataset: tempDataset
            // })
            doChart.data.labels.push('juh');

            doChart.data.datasets.forEach((dataset) => {
                let myy = [5,6,7,8]
                dataset.data.push(tempDataset);
            });
        
            
            // doChart.data.datasets.forEach((dataset) => {
            //     alert(JSON.stringify(dataset))
            //     dataset.data.push(JSON.stringify(tempDataset));
            // });
        
            // doChart.data.datasets.push(JSON.stringify(tempDataset))
            // this.setState({chartDataset: tempDataset})
        
        
        

        // if (this.props.xax !== "") {
        //     let mya = this.props.xax;
        //     if (doChart.data.labels == "") {
        //         for (let i in mya) {
        //             doChart.data.labels.push(mya[i]);
        //         }
        //     }
        //     if (doChart.data.datasets[0].data.length == 0) {
        //         let tary = this.props.yax;
        //         let labelArray = ['asd', 'sde', 'sde']
        //         for (let j in tary) {
        //             doChart.data.datasets[0].data[j] = tary[j];

        //         }

                // for(let k in labelArray){
                //             doChart.data.datasets[0].label[j] = labelArray
                // }

            // }
           

            doChart.update();

            //  this.createChart();
        }
    componentWillUpdate() {
        // alert("will update")
    }

    // componentDidUpdate(prevProps) {
    //     if(prevProps.value !== this.props.value) {
    //       this.setState({value: this.props.value});
    //     }
    //   }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);

    }


    componentWillMount() {
        // alert("will mount")
    }
    componentWillReceiveProps(newProps) {
        // alert("inside willrecpro")
        // alert(newProps.xax)
        this.setState({ xaxisv: newProps.xax });
    }

    createChart = () => {

        console.log(playername);
        console.log(runscore);

        const xso = this.props.xax
        const yso = this.props.yax

        // var myBarChart = new Chart(ctx).Bar(data);


        
        doChart = new Chart(ctx,
            {
                type: 'bar',
                data: {
                    labels: xso,
                    datasets: []
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        gridLines: {
                            offsetGridLines: true
                        },

                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            stacked: true
                        }]
                    },
                    title: {
                        display: true,
                        text: 'Custom Chart Title'
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            fontColor: "#000080",
                        }
                    }

                }
            });
    }
    render() {
        return (
            <div style={{ height: "100%" }}>
                <canvas id="doChart" width="100" height="100"></canvas>

            </div>
        )
    }
}


export default BarChart;