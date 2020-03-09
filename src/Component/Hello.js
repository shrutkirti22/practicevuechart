import React from 'react';

class Hello extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidUpdate(){
// this.props.update();
    }

    componentWillMount() {
        // alert("will mount")
    }

    componentDidMount() {
        // alert("did mount")
        // this.props.update();
    }


    render() {
        // alert("rendered")
        // alert(this.props.myName)
        return (
            <div><h3 style={{ color: 'red' }}>Hello {this.props.myName}</h3></div>
        );

    }
}

export default Hello;