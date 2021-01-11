import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from "./Core/Menu";
import Signup from "./User/Signup"
import Pokemon from "./Pokemon/Pokemon"

const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/Pokemon" component={Pokemon} />
        </Switch>
    </div>
);

export default MainRouter;