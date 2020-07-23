import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux'
import './App.css';
import store from './redux/store'
import CakeContainer from './cakeContainer';

function App () {
    return (
        <Provider store={store}>
            <div>
                <CakeContainer/>
            </div>
        </Provider>
    )
}
 


export default connect(mapStateToProps, mapDispatchToProps)(App);
