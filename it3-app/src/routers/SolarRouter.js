import { Redirect, Route, Switch } from "react-router";
import React from 'react'
import { Solar } from "../components/Solar";
import { SolarCityById } from "../components/SolarCityById";

export const SolarRouter = () => {
    return <Switch>
        <Route exact path='/solar' component={Solar} />
        <Route path='/solar/:id' component={SolarCityById} /> 
        <Redirect to='/solar'></Redirect>
    </Switch>
}
