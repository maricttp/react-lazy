import React from "react";
import WithoutSuspense from "../withoutSuspense/without_suspense.components";
import WithSuspense from "../suspense/with_suspense.component";
import "./home.scss"



export interface HomeProps {

}

export interface HomeState {

}

class Home extends React.Component<HomeProps, HomeState> {
    render() {
        return (
            <div className="app">
                <WithoutSuspense />
                <div className="line" />
                <WithSuspense />
            </div>
        );
    }
}

export default Home;