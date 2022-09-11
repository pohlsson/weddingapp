import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <StrictMode>
            <AmplifyProvider>
                <Authenticator.Provider>
                    <App />
                </Authenticator.Provider>
            </AmplifyProvider>
        </StrictMode>,
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
