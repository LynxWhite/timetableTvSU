import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import root from '../sagas/root'

import TableWrapper from './table/TableWrapper'
import PageWrapper from './page/PageWrapper'
import Test from './test/test'

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
                        <Route path='/trat' component={PageWrapper}/> 
                        <Route path='/' component={Test}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App
