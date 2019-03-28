import React from "react";
import PropTypes from "prop-types";

const Page = props => {
  const {
    page: {
      html,
      frontmatter: { title }
    },
    theme
  } = props;

  return (
    <React.Fragment>
      <header>
        <h1>{title}</h1>
      </header>
      {html}
    </React.Fragment>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Page;
