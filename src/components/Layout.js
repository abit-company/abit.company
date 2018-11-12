import 'normalize.css';
import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';
import Head from './Head';
import Footer from './Footer';

const theme = {
  mainColor: '#0c35fb', //7682ff
};

class TemplateWrapper extends Component {
  componentDidMount() {
    window.addEventListener('load', this.initFreshChatWidget);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.initFreshChatWidget);
  }

  initFreshChatWidget = () => {
    window.fcWidget.init({
      token: '8bbe1e17-6274-436f-9643-ae087c3386cb',
      host: 'https://wchat.freshchat.com',
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Head />
          <Header />
          {this.props.children}
          <Footer />
          <GlobalStyle />
        </>
      </ThemeProvider>
    );
  }
}
const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
      box-sizing: border-box;
  }
  @import url("https://use.typekit.net/yyd6ihq.css");
  body {
    font-family: Europa
  }

  p {
    margin: 0;
  }
`;

export default TemplateWrapper;
