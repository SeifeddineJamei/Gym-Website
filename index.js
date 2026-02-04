import React from 'react';
import { UserProvider } from './context/UserContext';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './Components/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <ErrorBoundary>
          <div className="app-container">
            <App />
          </div>
        </ErrorBoundary>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
