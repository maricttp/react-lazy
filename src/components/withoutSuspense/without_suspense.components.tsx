import React from "react";
import List from "../list/list.component";
import {getData} from "../../api/api"
import "./without_suspense.scss"

export interface WithoutSuspenseProps {

}

export interface WithoutSuspenseState {

}

class WithoutSuspense extends React.Component<WithoutSuspenseProps, WithoutSuspenseState> {
    state = {
        list: [],
        isLoading: true
    };

    componentDidMount() {
        getData().then(list => {
            this.setState({list, isLoading: false});
        });
    }

    render() {
        const load = <h1 className="load">Loading...</h1>;
        return (
            <div className="wrapper">
                <h1>Without Suspense</h1>
                <div className="list">
                    {this.state.isLoading ? load : <List list={this.state.list}/>}
                </div>

            </div>
        );
    }
}

export default WithoutSuspense;