import React from 'react';
import AppRouter from './routes/AppRouter';
import './styles/styles.scss';

import { Provider } from "react-redux";
import { store } from './store/store';

function AppFeelIt() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default AppFeelIt;
