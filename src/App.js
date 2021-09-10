import React, { } from 'react'

import NavBar from './components/NavBar.jsx';
import About from './pages/About.jsx'

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Shop from './pages/Shop/Shop.jsx';
import Footer from './components/Footer';

const commonAttr = {
  fontFamily: 'quasimoda, sans-serif',
  fontWeight: '300',
  fontStyle: 'normal',
  fontSize: 16,
}

const theme = {
  ...commonAttr,
  backgroundColor: 'white',
  fontColor: 'black',

  secondary: '#5e5e5e',
}


const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: quasimoda;
    src: url("https://use.typekit.net/lku6zix.css");
  }

  body {
    margin: 0;
    height: 100vh;
    transition-duration: .75s;
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontWeight};
    color: ${props => props.fontColor};
    background-color: ${props => props.backgroundColor};
  }

  #root{
    height: inherit;
  }
  html {
    scroll-behavior: smooth;
    font-size: 16px;

    @media (max-width: 600px) {
      font-size: 14px;
    }


    @media (max-width: 400px) {
      font-size: 12px;
    }
  }
  `;



function App() {




  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <NavBar />
        <div>
          <GlobalStyle
            fontFamily={theme.fontFamily}
            fontColor={theme.fontColor}
            backgroundColor={theme.backgroundColor}
            fontSize={theme.fontSize}
            fontWeight={theme.fontWeight}
          />
          <Switch>
            <Route path='/' exact component={About} />
            <Route path='/shop' exact component={Shop} />
            <Route path='/' render={() => <div>404</div>} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
