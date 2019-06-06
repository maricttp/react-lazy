import React from 'react';

/**
 * HOC that will scroll the window to top once the component has been mounter - to be used on route containers, 
 * where scroll position would remain on route changes. 
 */
const withScrollToTop = (WrappedComponent: React.ComponentType<any>) => class ScrollTopOnMount extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <WrappedComponent { ...this.props } />
        )
    }
};

export default withScrollToTop;
