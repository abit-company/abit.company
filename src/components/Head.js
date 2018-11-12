import React from 'react';
import Helmet from 'react-helmet';

const Head = () => (
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
    <meta property="og:title" content="Building the future one bit at a time" />
    <meta
      property="og:description"
      content="We love to solve the hardest problems, providing comprehensive blockchain solutions dealing with technology, marketing, legal and finance matters.
    We embrace each project with full commitment, and we treat them as our very own."
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://abit.company/abitcompany-logo.png"
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
      content="https://abit.company/abitcompany-logo.png"
    />

    <script src="https://wchat.freshchat.com/js/widget.js" />
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
);

export default Head;
