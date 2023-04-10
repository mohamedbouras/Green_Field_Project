import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {BrowserRouter} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import '@progress/kendo-theme-default/dist/all.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)
