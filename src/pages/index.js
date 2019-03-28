import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { FacebookProvider, Page } from "react-facebook";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Parallax } from "react-parallax";
import theme from "../theme/theme2.yaml";
import { FaRecycle, FaChild, FaCog } from "react-icons/fa";

const PillarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Pillar = styled.div`
  flex: 0 0 250px;
  margin: 0 25px;
  text-align: center;

  & > svg {
    font-size: 100px;
    fill: ${theme.colors.primary};
    margin-bottom: 20px;
  }

  & p {
    text-align: center;
  }
`;

const PhantomHr = styled.hr`
  margin: 0;
  border: 0;
`;

const Centered = styled.div`
  width: 500px;
  margin: 20px auto;
`;

const Sides = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 1 0 500px;
  margin-right: 15px;
`;

const Right = styled.div`
  flex: 0 0 auto;
`;

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const { data } = this.props;

    const {
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
    } = data;

    const backgrounds = {
      desktop,
      tablet,
      mobile
    };

    return <>
        <ThemeContext.Consumer>
          {theme => (
            <Hero
              scrollToContent={this.scrollToContent}
              backgrounds={backgrounds}
              theme={theme}
            />
          )}
        </ThemeContext.Consumer>

        <PhantomHr ref={this.separator} />

        <Article noPadding={true}>
          <h2>Nos 3 piliers</h2>
          <PillarContainer>
            <Pillar>
              <FaChild />
              <div>
                <h3>Diversité et inclusion</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis cursus
                  libero, sed ullamcorper enim.
                </p>
              </div>
            </Pillar>
            <Pillar>
              <FaRecycle />
              <div>
                <h3>Développement durable</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis cursus
                  libero, sed ullamcorper enim.
                </p>
              </div>
            </Pillar>
            <Pillar>
              <FaCog />
              <div>
                <h3>Excellence technique</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis cursus
                  libero, sed ullamcorper enim.
                </p>
              </div>
            </Pillar>
          </PillarContainer>
        </Article>

        <Parallax bgImage={data.parallax.resize.src} strength={-200}>
          <div style={{ height: "500px" }} />
        </Parallax>

        <Article noPadding={true}>
          <Sides>
            <Left>
              <h2>Historique</h2>
              <p>
<<<<<<< HEAD
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
=======
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
              <h2>Les Jeux 2020</h2>
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
>>>>>>> 218593ecf6c1a8e88671ad5bd89207dda01fa923
              </p>
            </Left>
            <Right>
              <h2>Actualités</h2>
              <Centered>
                <FacebookProvider appId="372145173617264">
                  <Page href="https://www.facebook.com/jeuxdegenie/" tabs="timeline" width="500" height="600px" />
                </FacebookProvider>
              </Centered>
            </Right>
          </Sides>
        </Article>

        <Seo facebook={facebook} />
      </>;
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
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

    parallax: imageSharp(fluid: { originalName: { regex: "/ets-aerial/" } }) {
      resize(width: 1920, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;
