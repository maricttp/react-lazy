import React from "react";
import {FormattedMessage} from 'react-intl';

export interface HomeProps {

}

export interface HomeState {

}

class Home extends React.Component<{}, {}> {

    render() {
        return (<div><FormattedMessage id='home'/></div>);
    }
}

export default Home;