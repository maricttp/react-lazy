import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { map as _map } from "lodash"

import Home from "../components/home/home.component";
import Suspense from "../components/suspense/suspense.components";

type RouteType = {
    [key: string]: any
}

const routes: RouteType = {
    "/": Home,
    "/suspense": Suspense
}

const AppRouter: React.FunctionComponent<{}> = () => {
    return (<Router>
        {_map(routes, (component: any, key: string) => {
            return <Route exact={key==="/"} path={key} component={component} />
        })}
    </Router>)
}

export default AppRouter