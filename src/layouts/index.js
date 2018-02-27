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
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet
          title="abit.company"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        {children()}
      </div>
    );
  }
}

export default TemplateWrapper;
