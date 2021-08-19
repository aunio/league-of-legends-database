import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage/HomePage'
import ChampionDetailsPage from './pages/ChampionDetailsPage/ChampionDetailsPage'

import './App.css'

const App = () => {

    return (
        <Router>
            <Route exact path="/" component={HomePage} />
            <Route path="/champion/:id" component={ChampionDetailsPage} />
        </Router>
    )

}

export default App;