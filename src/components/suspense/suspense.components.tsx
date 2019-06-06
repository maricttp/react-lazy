import React from "react";
import { compose } from "redux";

import withScrollToTop from "../../hoc/withScrollToTop";

export type SuspenseProps = {
    
}
 
export type SuspenseState = {
    
}
 
class Suspense extends React.Component<SuspenseProps, SuspenseState> {
    render() { 
        return (<div>Suspense</div>);
    }
}
 
export default compose(withScrollToTop)(Suspense);