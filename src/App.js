import React, { useState, useEffect } from 'react'

import NavBar from './components/NavBar.jsx';
import About from './pages/About.jsx'
import { ToggleContext } from './ToggleContext'
import styled from 'styled-components';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Shop from './pages/Shop.jsx';

const commonAttr = {
  fontFamily: 'quasimoda, sans-serif',
  fontWeight: '300',
  fontStyle: 'normal',
  fontSize: 16,
}

const lightTheme = {
  ...commonAttr,
  //light beige
  backgroundColor: 'white',
  //dark beige
  fontColor: 'black',

  //grey
  secondary: '#5e5e5e',
}

const darkTheme = {
  ...commonAttr,
  //dark gray
  backgroundColor: 'black',
  //gray
  fontColor: 'white',

  //grey
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

const GlobalContainer = styled.div`

  @media (max-width: 760px) {
    top: 50px;
  }
`;

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {

    if (darkMode) {
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }

  }, [darkMode])

  return (
    <ToggleContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>

        <BrowserRouter>
          <NavBar />
          <GlobalContainer>
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
          </GlobalContainer>
        </BrowserRouter>
      </ThemeProvider>
    </ToggleContext.Provider>
  );
}

export default App;
