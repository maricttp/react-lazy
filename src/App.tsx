import React from 'react';
import AppRouter from './routes/routes';

import './App.scss';

function App() {
    return (
        <div className="App">
            <img alt="loading" src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif"
                 style={{visibility: "hidden", height: "10px"}}/>
            <AppRouter/>
        </div>
    );
}

export default App;
