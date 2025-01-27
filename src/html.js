import React from "react";
import PropTypes from "prop-types";
import config from "../content/meta/config";

const p = config.pathPrefix || "";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {this.props.headComponents}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#D0E0D8" />
          <meta name="apple-mobile-web-app-title" content="Lazywill" />
          <link rel="apple-touch-icon" href={p + "/icons/apple-icon-57x57.png"} sizes="57x57" />
          <link rel="apple-touch-icon" href={p + "/icons/apple-icon-60x60.png"} sizes="60x60" />
          <link rel="apple-touch-icon" href={p + "/icons/apple-icon-72x72.png"} sizes="72x72" />
          <link rel="apple-touch-icon" href={p + "/icons/apple-icon-76x76.png"} sizes="76x76" />
          <link rel="apple-touch-icon" href={p + "/icons/apple-icon-114x114.png"} sizes="114x114" />
          <link rel="apple-touch-icon" href={p + "/icons/apple-icon-120x120.png"} sizes="120x120" />
          <link rel="apple-touch-icon" href={p + "/icons/apple-icon-144x144.png"} sizes="144x144" />
          <link rel="apple-touch-icon" href={p + "/icons/apple-icon-152x152.png"} sizes="152x152" />
          <link rel="apple-touch-icon" href={p + "/icons/apple-icon-180x180.png"} sizes="180x180" />
          <link rel="icon" type="image/png" sizes="16x16" href={p + "/icons/favicon-16x16.png"} />
          <link rel="icon" type="image/png" sizes="32x32" href={p + "/icons/favicon-32x32.png"} />
          <link rel="icon" type="image/png" sizes="96x96" href={p + "/icons/favicon-96x96.png"} />

          {/* Carousel styles */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          {/* Oswald and Lato */}
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300|Oswald:300"
            rel="stylesheet"
          />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
