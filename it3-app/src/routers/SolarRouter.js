import { Redirect, Route, Switch } from "react-router";
import React from 'react'
import { Solar } from "../components/Solar";

export const SolarRouter = () => {
    return <Switch>
        <Route exact path='/solar' component={Solar} />
        <Route path='/:id'> 
            Acá está el id
        </Route>
    </Switch>
}
