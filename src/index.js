import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import store from './state/store';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NF8hxKBWAiPiCSP04FpW8MF4J2iRogoDOsGRE2zzs4vvJRe56eIjhovMnCrOpKdGWge3bmdjL5keiUixjQpPJEa00RVZwbaRb')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <Elements stripe={stripePromise} >
    <App />
    </Elements>
  </React.StrictMode>
  </Provider>
);
