import React from "react";
import { compose } from "redux";
import {FormattedMessage} from 'react-intl';
import withScrollToTop from "../../hoc/withScrollToTop";

export type SuspenseProps = {
    
}
 
export type SuspenseState = {
    
}
 
class Suspense extends React.Component<SuspenseProps, SuspenseState> {
    render() { 
        return (<div>
            <FormattedMessage id='suspense' />
        </div>);
    }
}
 
export default compose(withScrollToTop)(Suspense);