// @flow

import React, { type Node, Component } from "react";
import Helmet from "react-helmet";
import { injectGlobal } from "styled-components";
import "normalize.css";

injectGlobal`
  @import url("https://use.typekit.net/yyd6ihq.css");
  body {
    font-family: Europa
  }

  p {
    margin: 0;
  }
`;

type Props = {
  children: Function
};

class TemplateWrapper extends Component<Props> {
  componentDidMount() {
    window.addEventListener("load", this.initFreshChatWidget);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.initFreshChatWidget);
  }

  initFreshChatWidget = () => {
    window.fcWidget.init({
      token: "8bbe1e17-6274-436f-9643-ae087c3386cb",
      host: "https://wchat.freshchat.com"
    });
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>abit.company</title>
          <meta name="description" content="Sample" />
          <meta name="keywords" content="Sample, something" />
          <script src="https://wchat.freshchat.com/js/widget.js" />
        </Helmet>
        {children()}
      </div>
    );
  }
}

export default TemplateWrapper;
