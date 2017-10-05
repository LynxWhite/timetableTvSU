import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import root from '../sagas/root'

import TableWrapper from './table/TableWrapper'
import t2 from './t2'

import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import '../resources/styl/style.styl'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

sagaMiddleware.run(root)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path='/test/:faculty' component={TableWrapper}/>
                        <Route exact path='/edit' component={t2}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App
