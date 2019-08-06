import React, {Suspense, lazy} from "react";
import "../withoutSuspense/without_suspense.scss"
import {getData} from "../../api/api";

const ItemLazy = lazy(() => import('../list/item_lazy.components'));

export type SuspenseProps = {}

export type SuspenseState = {}


class WithSuspense extends React.Component<SuspenseProps, SuspenseState> {
    state = {
        list: [],
    };

    componentDidMount() {
        getData().then(list => {
            this.setState({list});
        });
    }

    render() {
        const loadingImg = <div className="album-img">
            <img alt="loading" src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif"/>
        </div>;

        const list = this.state.list.map((e: any) => {
            return (
                <Suspense key={e.id.label} fallback={loadingImg}>
                    <ItemLazy key={e.id.label} data={e}/>
                </Suspense>
            );
        });
        return (
            <div className="wrapper">
                <h1>With Suspense and Lazy Load</h1>
                <div className="list">
                    {list}
                </div>
            </div>
        );
    }
}

export default WithSuspense;