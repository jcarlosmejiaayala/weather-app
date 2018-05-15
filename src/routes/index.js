import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from 'routes/Home'
import Collection from 'routes/Collection'
import App from 'components/App'

const Routes = () => (
    <Router>
        <App>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/collections' component={Collection}/>
            </Switch>
        </App>
    </Router>
)

export default Routes