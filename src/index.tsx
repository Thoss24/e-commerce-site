import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/root_store';
import ModalContextProvider from './store/modal_context';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utility/http';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ModalContextProvider>
    <Provider store={store}><App /></Provider>
    </ModalContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);


