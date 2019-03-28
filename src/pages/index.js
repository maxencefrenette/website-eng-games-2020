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
                Depuis maintenant 29 ans, les Jeux de génie du Québec représentent la plus grande compétition 
                d’ingénierie au Québec et le plus important rassemblement d’étudiant.e.s en génie de la province. 
                Les participant.e.s, provenant de 12 universités du Québec et de l’Ontario, mettent à l’épreuve leurs 
                compétences générales et spécifiques, complémentaires à celles de la profession d’ingénieur en s’affrontant 
                dans des défis de nature variée. Pour la trentième édition, l’événement se déroulera du 3 au 7 janvier 2020 
                à l’École de technologie supérieure de Montréal. 
              </p>
              <h1>La mission JDG 2020</h1>
              <p>
                Les conséquences néfastes des activités humaines provoquent la dégradation de la couche d’ozone. 
                Les climatologues du Bureau d’Ingénierie et de Planification des Compétitions Officielles Multidisciplinaires 
                (BIPCOM) assurent l’imminence d’une suite de catastrophes naturelles qui auront pour effet de décimer à un rythme 
                alarmant toute forme de vie sur Terre. Ces événements sans précédent débuteront dès septembre 2019. 
                En vue de la mission “JDG2020” qui aura lieu en janvier prochain, chaque université québécoise est mandatée 
                de sélectionner, parmi les survivants, 40 étudiants et étudiantes en génie. Cette sélection se fera sur la base 
                de leur aptitude à résoudre les problématiques complexes liées à la reconstruction d’un monde meilleur, durable 
                et à leur image. L’objectif de cette mission est d’améliorer la situation sur la Terre, préserver le savoir, 
                exploiter responsablement les ressources restantes et relancer les activités de manière durable.
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
