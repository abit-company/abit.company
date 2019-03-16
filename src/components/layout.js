import React from 'react';
import 'normalize.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Footer from '../components/Footer';

const theme = {
  mainColor: '#0c35fb',
  textColorLight: '#fff',
};

const Layout = ({ children, location }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header location={location} />
      <main>{children}</main>
      <Footer />
      <GlobalStyle />
    </>
  </ThemeProvider>
);

export default Layout;

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

// type Props = {
//   children: Function
// };

// class TemplateWrapper extends Component<Props> {
//   componentDidMount() {
//     window.addEventListener("load", this.initFreshChatWidget);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("load", this.initFreshChatWidget);
//   }

//   initFreshChatWidget = () => {
//     window.fcWidget.init({
//       token: "8bbe1e17-6274-436f-9643-ae087c3386cb",
//       host: "https://wchat.freshchat.com"
//     });
//   };

//   render() {
//     const { children } = this.props;
//     return (
//       <div>
//         {children()}
//       </div>
//     );
//   }
// }

// export default TemplateWrapper;
