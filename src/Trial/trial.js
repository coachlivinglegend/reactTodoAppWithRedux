import React from 'react';
import { handleIncrement, handleDecrement, sayName} from './actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        counter: state.handleTheCount.counter,
        textfield: state.sayMyName.textfield
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleIncrement: () => dispatch(handleIncrement()),
        onHandleDecrement: () => dispatch(handleDecrement()),
        onSayMyName: () => {
            dispatch(sayName());
            const field = document.getElementById("field");
            field.value = ""
        }
    }  
}

class Trial extends React.Component {

    // handleIncrement = () => {
    //     this.setState((prevState) => ({
    //         counter: prevState.counter + 1
    //     }))
    // }
    // handleDecrement = () => {
    //     this.setState((prevState) => ({
    //         counter: prevState.counter - 1
    //     }))
    // }
    
    // handleName = (e) => {
    //     e.preventDefault();
    //     const field = document.getElementById("field");
    //     this.setState({
    //         textfield: field.value
    //     })
    //     field.value = ""
    // }

    render() {
        return (
            <div>
                <div>
                    <h1>You are {this.props.counter} years old</h1>
                    <button onClick = {this.props.onHandleIncrement}>Increase</button>
                    <button onClick = {this.props.onHandleDecrement}>Decrease</button>
                </div>
                <div>
                    <h2>Your name is {this.props.textfield}</h2>
                    <div><input type="text" placeholder="What is your name?" name="textfield" id="field"/><button onClick={this.props.onSayMyName}>Add Name</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trial)