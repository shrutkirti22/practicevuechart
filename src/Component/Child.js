import React from 'react';

class Child extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidUpdate(){
// this.props.update();
    }

    componentWillMount() {
    //    /= alert("will mount")
    }

    componentDidMount() {
        alert("did mount")
        // this.props.update();
    }


    render() {
        // alert("child rendered")
        // alert(this.props.myName)
        return (
            <div><h3 style={{ color: 'red' }}>child component </h3></div>
        );

    }
}

export default Child;