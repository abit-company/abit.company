// @flow

import React, { type Node, Component } from "react";
import Helmet from "react-helmet";
import { injectGlobal } from "styled-components";
import "normalize.css";

injectGlobal`
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
          <title>abitcompany</title>
          <meta
            name="description"
            content="We love to solve the hardest problems, providing comprehensive blockchain solutions dealing with technology, marketing, legal and finance matters.
            We embrace each project with full commitment, and we treat them as our very own."
          />
          <meta
            name="keywords"
            content="ico,blockchain,bitcoin,technology,marketing,legal,finance"
          />
          <meta property="og:url" content="https://abit.company/" />
          <meta property="og:site_name" content="abitcompany" />
          <meta
            property="og:title"
            content="Building the future one bit at a time"
          />
          <meta
            property="og:description"
            content="We love to solve the hardest problems, providing comprehensive blockchain solutions dealing with technology, marketing, legal and finance matters.
            We embrace each project with full commitment, and we treat them as our very own."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://abit.company/abitcompany_logo.png"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@abitcompany" />
          <meta name="twitter:creator" content="@abitcompany" />
          <meta name="twitter:title" content="abitcompany" />
          <meta
            name="twitter:description"
            content="Building the future one bit at a time"
          />
          <meta
            name="twitter:image"
            content="https://abit.company/abitcompany_logo.png"
          />
          <script src="https://wchat.freshchat.com/js/widget.js" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />>
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "abitcompany",
            "url": "http://abit.company",
            "sameAs": [
              "http://www.facebook.com/abitcompany",
              "http://www.linkedin.com/company/18563667/",
              "https://twitter.com/abitcompany"
            ]
          }
          `}</script>
        </Helmet>
        {children()}
      </div>
    );
  }
}

export default TemplateWrapper;
