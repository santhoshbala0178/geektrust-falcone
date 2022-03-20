import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './components/Theme';
import Header from './components/Header';
import AppContainer from './App.style';
import Footer from './components/Footer';
import MainPage from './components/MainPage/MainPage';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <MainPage />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
