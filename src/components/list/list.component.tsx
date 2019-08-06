import React from "react";
import Item from "./item.components";

export type ListProps = {}

export type ListState = {}

class List extends React.Component<any, any> {

    render() {
        const {list} = this.props;
        return list.map((e: any) => {
            return <Item key={e.id.label} data={e}/>

        });
    }
}

export default List;