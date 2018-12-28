import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import Hero from "../components/Hero";
import Seo from "../components/Seo";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
        posts: { edges: posts = [] },
        bgDesktop: {
          resize: { src: desktop }
        },
        bgTablet: {
          resize: { src: tablet }
        },
        bgMobile: {
          resize: { src: mobile }
        },
        site: {
          siteMetadata: { facebook }
        }
      }
    } = this.props;

    const backgrounds = {
      desktop,
      tablet,
      mobile
    };

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <Hero scrollToContent={this.scrollToContent} backgrounds={backgrounds} theme={theme} />
          )}
        </ThemeContext.Consumer>

        <hr ref={this.separator} />

        <ThemeContext.Consumer>
          {theme => (
            <Article theme={theme}>
              <h1>Historique</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet velit nec
                mi tincidunt aliquet. Fusce id neque congue, pellentesque nulla vel, sagittis eros.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Mauris quis faucibus enim. Donec tempus sem eu lectus condimentum, non
                maximus felis posuere. Praesent non arcu ac dolor mattis accumsan. Nunc accumsan ut
                eros non volutpat. Suspendisse potenti. In ultricies libero eget magna facilisis, in
                gravida nisl lobortis. Aliquam felis mauris, molestie eget pharetra in, dignissim
                sit amet eros. Phasellus sed justo ut urna molestie tempor at vitae enim.
              </p>
              <h1>Les Jeux 2020</h1>
              <p>
                Proin bibendum, tellus nec accumsan volutpat, metus tortor placerat tortor, vitae
                consectetur nisl risus nec nisl. Integer porta arcu et efficitur faucibus.
                Suspendisse tincidunt quam et laoreet mollis. Aliquam aliquet facilisis odio, et
                lobortis leo sagittis ac. Maecenas a ipsum vitae ante fermentum tempus. Vestibulum
                eget gravida est. Cras ultrices dui ipsum, sed molestie felis vestibulum quis. Donec
                at mi eget neque luctus suscipit eget vel ex. Aenean facilisis lorem nec aliquet
                scelerisque. In nunc nibh, commodo ut pellentesque in, venenatis vel turpis.
                Maecenas consequat pulvinar auctor. Integer et dapibus est, non mollis leo.
              </p>
            </Article>
          )}
        </ThemeContext.Consumer>

        <Seo facebook={facebook} />

        <style jsx>{`
          hr {
            margin: 0;
            border: 0;
          }

          h1 {
            margin-top: 20px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
            cover {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/mcgill-volley/" } }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/mcgill-volley/" } }) {
      resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/mcgill-volley/" } }) {
      resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;

//hero-background
