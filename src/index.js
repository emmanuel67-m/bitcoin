import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the 'client' import for React 18+
import './index.css';  // Assuming you have a global stylesheet
import App from './App';  // Import your main App component

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
