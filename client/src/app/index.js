
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { DeponiiList, DeponiiInsert, DeponiiUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/deponii/list" exact component={DeponiiList} />
                <Route path="/deponii/create" exact component={DeponiiInsert} />
                <Route
                    path="/deponii/update/:id"
                    exact
                    component={DeponiiUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App