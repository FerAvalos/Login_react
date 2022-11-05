import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginForm } from './components/loginForm';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginForm/>
  </React.StrictMode>
);

