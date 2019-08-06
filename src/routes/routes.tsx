import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { map as _map } from "lodash";

import Home from "../components/home/home.component";
import WithSuspense from "../components/suspense/with_suspense.component";

type GenericComponent = typeof Home | typeof WithSuspense

type RouteType = {
    [key: string]: GenericComponent
}

const rootRoute = "/";

const routes: RouteType = {
    [rootRoute]: Home,
    "/suspense": WithSuspense
};

const AppRouter: React.FunctionComponent<{}> = () => {
    return (<Router>
        {_map(routes, (component: React.ComponentClass<any, any>, key: string) => {
            return <Route key={key} exact={key===rootRoute} path={key} component={component} />
        })}
    </Router>)
};

export default AppRouter