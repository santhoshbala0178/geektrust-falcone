import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './store';
import theme from './components/Theme';
import Header from './components/Header/Header';
import AppContainer from './App.style';
import Footer from './components/Footer';
import MainPage from './components/MainPage/MainPage';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/result" element={<ResultPage />} />
            </Routes>
          </Router>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
