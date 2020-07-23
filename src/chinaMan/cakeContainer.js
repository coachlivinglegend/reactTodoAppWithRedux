import React from 'react'
import { buyCake } from './redux/cake/cakeActions'
import { connect } from 'react-redux';


function CakeContainer() {
    return (
        <div>
            <h2>Number of cakes</h2>
            <button>Buy Cake</button>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)