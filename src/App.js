import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage'
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { deepOrange, deepPurple, lightBlue, orange } from '@mui/material/colors';
import { useState } from 'react';

export default function App() {

  // const localTheme = JSON.parse(localStorage.getItem('theme'));
  // const theme = localTheme === null ? false : localTheme;

  // const [darkState, setDarkState] = useState(theme);

  // const palletType = darkState ? 'dark' : 'light';
  // const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  // const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

  // const darkTheme = createTheme({
  //   palette: {
  //     type: palletType,
  //     primary: {
  //       main: mainPrimaryColor,
  //     },
  //     secondary: {
  //       main: mainSecondaryColor,
  //     },
  //   },
  // });

  // const handleThemeChange = () => {
  //   JSON.stringify(localStorage.setItem('theme', !darkState));
  //   setDarkState(!darkState);
  // };

  return <>
  {/* <ThemeProvider theme={darkTheme}> */}
    <CssBaseline />

    <Container>
      {/* <Header darkState={darkState} handleThemeChange={handleThemeChange} /> */}
      <HomePage/>
    </Container>  
  {/* </ThemeProvider> */}
  </>
}

