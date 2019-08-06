import React from "react";

export type ItemProps = {}

export type ItemState = {}

class Item extends React.Component<any, any> {

    render() {
        const {data} = this.props;
        return <div>
            <img alt="" src={data["im:image"][2].label} />
            <p>{data["im:artist"].label}</p>
        </div>
    }
}

export default Item;