import React from 'react'
import ReactDOM from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { TaskProvider } from './store/AppContext';

import './styles/index.css'

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <TaskProvider>
            <App />
        </TaskProvider>
    </React.StrictMode>,
);


