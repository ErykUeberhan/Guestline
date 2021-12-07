import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import reducer, { initialState } from './helpers/Reducer';
import { StateProvider } from './StateProvider';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
