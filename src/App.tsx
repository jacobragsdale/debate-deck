import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline'
import { SignIn } from './components/SignIn'
import { Lander } from './components/Lander'
import { Project } from './components/Project'
import { Dashboard } from './components/Dashboard'
import { Help } from './components/Help'

import { reducer } from './state/reducer'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <CssBaseline />
                <Route exact path="/" component={Lander} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/project" component={Project} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/help" component={Help} />
            </Router>
        </Provider>
    )
}
