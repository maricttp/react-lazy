import React from "react";
import LazyLoad from "react-lazyload";

export type ItemProps = {}

export type ItemState = {}

class ItemLazy extends React.Component<any, any> {

    render() {
        const {data} = this.props;
        return <div>
            <LazyLoad>
                <img alt="" src={`${data["im:image"][2].label}?${new Date().getDate()}`}/>
                <p>{data["im:artist"].label}</p>
            </LazyLoad>
        </div>
    }
}

export default ItemLazy;