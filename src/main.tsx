import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import APIProvider from './utils/websocket/APIProvider';
import 'Styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <APIProvider>
            <App />
        </APIProvider>
    </React.StrictMode>
);
