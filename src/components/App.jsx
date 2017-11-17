import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import root from '../sagas/root'

import PageWrapper from './page/PageWrapper'

import 'bulma'
import '../resources/styl/style.styl'

import PageComponent from './experience/PageComponent'

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
                        <Route path='/t' component={PageWrapper}/>
                        <Route path='/' component={PageComponent}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App
