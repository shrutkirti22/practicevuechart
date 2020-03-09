import React from 'react'
import Hello from './Hello'
import Child from './Child'
// import './Modal.css';
import Modal from './Modal';
class Parent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'shruti',
            show: false,
            setShow: false
        }
    }

    changeEvent = (e) => {
        this.setState({ name: "shrutkirti" })
    }

    handleShow = (e) => {
        // alert("show")
        this.setState({ setShow: true })

    }

    handleClose = (e) => {
        this.setState({ setShow: false })
    }

    

    render() {
        return (
            <div>parent component {this.state.name}
                <button onClick={this.changeEvent}>change name</button>

                <main>
                    <h1>React Modal</h1>
                    <Modal show={this.state.show} handleClose={this.handleClose}>
                        <p>Modal</p>
                        <p>Data</p>
                    </Modal>
                    <button type="button" onClick={this.handleShow}>
                        open
                 </button>
                </main>

            </div>

        )
    }
    
}


export default Parent;