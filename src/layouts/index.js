// @flow

import React, { type Node, Component } from "react";
import Helmet from "react-helmet";
import { injectGlobal } from "styled-components";
import favicon from "../images/abitcompany - Logo.png";
import ogImage from "../images/abitcompany - og_image.jpg";
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
          <link rel="icon" href={favicon} type="image/png" />
          <title>abitcompany</title>
          <meta
            name="description"
            content="We love to solve the hardest problems, providing comprehensive blockchain solutions dealing with technology, marketing, legal and finance matters. We embrace each project with full commitment, and we treat them as our very own."
          />
          <meta
            name="keywords"
            content="ico,blockchain,bitcoin,technology,marketing,legal,finance"
          />
          <meta property="og:url" content="/" />
          <meta
            property="og:title"
            content="abitcomoany - Building the future one bit at a time"
          />
          <meta
            property="og:description"
            content="We love to solve the hardest problems, providing comprehensive blockchain solutions dealing with technology, marketing, legal and finance matters."
          />
          <meta property="og:image" content={ogImage} />

          <script src="https://wchat.freshchat.com/js/widget.js" />
        </Helmet>
        {children()}
      </div>
    );
  }
}

export default TemplateWrapper;
