import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { CustomTheme } from './Styles/theme';

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider resetCSS theme={CustomTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

