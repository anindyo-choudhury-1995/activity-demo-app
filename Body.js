import React, { Component } from 'react'
import Create from './Create'
import Home from './Home'
import Mapper from './Mapper'
import Time from './Time'
import Tags from './Tags'
import Createtag from './Createtag'
import Activities from './Activities'
import Dashboard from './Dashboard'
import DashboardListing from './DashboardListing'
import MapperV2 from './Mapper-v2'
import MapperV3 from './Mapper-v3'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Switch>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/mapper-v3">
          <MapperV3 />
        </Route>
        <Route path="/mapper/:id">
          <MapperV2 />
        </Route>
        <Route path="/mapper">
          <MapperV2 />
        </Route>
        <Route path="/time">
          <Time />
        </Route>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/create-tag">
          <Createtag />
        </Route>
        <Route path="/activity">
          <Activities />
        </Route>
        <Route path="/dashboard-listing">
          <DashboardListing />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    )
  }
}

export default Body