import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";


const store = configureStore();

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })


ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
