import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from "./Core/Menu";
import Signup from "./User/Signup"
import Pokemon from "./Pokemon/Pokemon"
import Function1 from "./Function1/Function1"
import Function2 from "./Function2/Function2"
import Function3 from "./Function3/Function3"

const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/Pokemon" component={Pokemon} />
            <Route exact path="/Function1" component={Function1} />
            <Route exact path="/Function2" component={Function2} />
            <Route exact path="/Function3" component={Function3} />
        </Switch>
    </div>
);

export default MainRouter;