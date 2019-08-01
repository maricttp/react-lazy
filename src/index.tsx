import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import * as serviceWorker from './serviceWorker';
import LanguageProvider from './components/language/language_provider.component'

class Index extends React.Component<any, any> {
    render() {
        return (
            <LanguageProvider>
                <App/>
            </LanguageProvider>
        )
    }
}


ReactDOM.render(
    <Index/>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
