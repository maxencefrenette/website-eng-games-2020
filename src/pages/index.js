import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { FacebookProvider, Page } from "react-facebook";
import styled from "styled-components";

const Centered = styled.div`
  width: 500px;
  margin: 20px auto;
`;

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

    return <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <Hero
              scrollToContent={this.scrollToContent}
              backgrounds={backgrounds}
              theme={theme}
            />
          )}
        </ThemeContext.Consumer>

        <hr ref={this.separator} />

        <ThemeContext.Consumer>
          {theme => <Article theme={theme}>
              <h2>
                Message de <i>commanditaire 1</i>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet velit
                nec mi tincidunt aliquet. Fusce id neque congue, pellentesque nulla vel,
                sagittis eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Mauris quis faucibus enim. Donec tempus sem eu lectus
                condimentum, non maximus felis posuere. Praesent non arcu ac dolor mattis
                accumsan. Nunc accumsan ut eros non volutpat. Suspendisse potenti. In ultricies
                libero eget magna facilisis, in gravida nisl lobortis. Aliquam felis mauris,
                molestie eget pharetra in, dignissim sit amet eros. Phasellus sed justo ut urna
                molestie tempor at vitae enim.
              </p>
              <h1>
                Message de <i>commanditaire 2</i>
              </h1>
              <p>
                Sed scelerisque ex eu facilisis vestibulum. Aliquam interdum est lacus, gravida
                posuere odio lobortis ut. Donec luctus ultricies dui at porta. Nulla finibus ex
                non lorem eleifend finibus. Duis maximus sit amet lorem et blandit. Morbi ut
                dolor id elit maximus convallis sit amet sit amet nulla. Nullam facilisis
                dapibus tincidunt. Suspendisse potenti. Etiam gravida lorem et turpis gravida
                fermentum. Vestibulum mauris sapien, interdum nec malesuada et, finibus aliquam
                nisl. Praesent neque diam, viverra eu mattis a, tincidunt id tortor. Maecenas
                dapibus tincidunt felis a pharetra.
              </p>
              <h1>Historique</h1>
              <p>
                Quisque eleifend eget ante sodales laoreet. Fusce molestie condimentum sapien,
                et gravida urna vestibulum id. Sed a sem elit. Proin viverra gravida laoreet. Ut
                ultrices eu lectus eu dictum. Cras urna felis, aliquam at lectus ut, facilisis
                pretium turpis. Etiam dignissim, elit vel cursus consequat, sem ipsum suscipit
                enim, id fermentum quam lorem sollicitudin mauris. Phasellus a arcu ut orci
                ornare vulputate at eu felis. Mauris cursus sit amet turpis sit amet maximus.
                Vivamus nec vestibulum lacus. Pellentesque porttitor nisl quis nulla lacinia,
                sed vulputate tellus blandit. Maecenas bibendum dolor et erat semper
                ullamcorper.
              </p>
              <h1>Les Jeux 2020</h1>
              <p>
                Proin bibendum, tellus nec accumsan volutpat, metus tortor placerat tortor,
                vitae consectetur nisl risus nec nisl. Integer porta arcu et efficitur faucibus.
                Suspendisse tincidunt quam et laoreet mollis. Aliquam aliquet facilisis odio, et
                lobortis leo sagittis ac. Maecenas a ipsum vitae ante fermentum tempus.
                Vestibulum eget gravida est. Cras ultrices dui ipsum, sed molestie felis
                vestibulum quis. Donec at mi eget neque luctus suscipit eget vel ex. Aenean
                facilisis lorem nec aliquet scelerisque. In nunc nibh, commodo ut pellentesque
                in, venenatis vel turpis. Maecenas consequat pulvinar auctor. Integer et dapibus
                est, non mollis leo.
              </p>
              <h1>Actualités</h1>
              <Centered>
                <FacebookProvider appId="372145173617264">
                  <Page href="https://www.facebook.com/jeuxdegenie/" tabs="timeline" width="500" />
                </FacebookProvider>
              </Centered>
            </Article>}
        </ThemeContext.Consumer>

        <Seo facebook={facebook} />

        <style jsx>{`
          hr {
            margin: 0;
            border: 0;
          }

          h1 {
            margin-top: 20px;
          }`}</style>
      </React.Fragment>;
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
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/montreal-edited/" } }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/montreal-edited/" } }) {
      resize(width: 800, height: 300, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/montreal-edited/" } }) {
      resize(width: 450, height: 200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;

//hero-background
