import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Only measure performance in production
const measurePerformance = () => {
    if (process.env.NODE_ENV === 'production') {
        reportWebVitals(console.log);
    }
};

root.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </React.StrictMode>,
);

measurePerformance();
