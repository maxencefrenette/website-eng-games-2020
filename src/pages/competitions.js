import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import MiniHero from "../components/MiniHero";
import Carousel from "../components/Carousel";
import styled from "styled-components";

const FloatRight = styled.div`
  float: right;
  margin-top: 5px;
  margin-left: 25px;
`;

const FloatLeft = styled.div`
  float: left;
  margin-top: 5px;
  margin-right: 25px;
`;

const CompetitionsPage = props => {
  const { data } = props;
  const {
    site: {
      siteMetadata: { facebook }
    },
    backgrounds
  } = data;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <>
            <MiniHero backgrounds={backgrounds} theme={theme} />
            <Article>
              <header>
                <h1>Compétitions</h1>
              </header>

              <p>
                Les Jeux de Génie du Québec, c’est la plus grande compétition d’ingénierie au Québec
                et le plus important rassemblement étudiant de génie de la province. Les
                participants et participantes devront mesurer leurs habiletés académiques,
                techniques, sportives et sociales au cours de cette compétition. Ils devront faire
                preuve d’esprit d’équipe et de dépassement personnel afin de surmonter les défis
                auxquels ils feront face lors de cet événement.
              </p>

              <h2>La Machine</h2>
              <p>
                <FloatRight>
                  <Carousel>{[data.machine1, data.machine2]}</Carousel>
                </FloatRight>
                La compétition de la machine robotique est l’épreuve maîtresse et le défi le plus
                difficile à relever des Jeux de Génie. Il s’agit de la seule compétition où les
                délégations travaillent à sa réalisation tout l’automne précédant les Jeux. Le défi
                : fabriquer une machine robotique intelligente qui surmontera les diverses épreuves
                d’un parcours prédéterminé en un temps donné. La fabrication de cette machine
                nécessite la formation d’équipes multidisciplinaires qui devront investir beaucoup
                de temps afin d’en arriver à un prototype des plus compétitifs. Chaque équipe devra
                œuvrer d’ingéniosité et de créativité en plus de développer la synergie nécessaire à
                la création d’une machine robotique à la hauteur des attentes des juges tout en
                respectant les devis. Les participants et participantes de cette compétition
                mettront donc à profit leurs connaissances acquises en ingénierie en plus
                d’administrer un budget consacré à l’achat des ressources matérielles et d’élaborer
                les transformations pour faire de leurs idées une réalité. La compétition de la
                machine robotique est un événement fortement médiatisé ouvert au public et fait la
                fierté des délégations et du comité organisateur. Merci à Rheinmetall, partenaire
                officiel de la compétition machine.
              </p>

              <h2>La compétition entrepreunariale</h2>
              <p>
                <FloatLeft>
                  <Carousel>{[data.entr1]}</Carousel>
                </FloatLeft>
                La compétition d’entrepreneuriat est une nouvelle épreuve qui va mener ses
                participants à mettre en pratique des compétences connexes et importantes dans un
                milieu innovant. Il s’agit de l’une des deux compétitions qui requiert une forte
                préparation avant l’arrivée aux jeux de génie. L’épreuve, qui se divise en trois
                volets, comprend le développement et la production d’un prototype pour un nouveau
                produit qui répond à une problématique prédéfinie, la rédaction d’un plan d’affaires
                afin de justifier le choix du produit, sa viabilité, et sa mise en œuvre du point de
                vue d’une entreprise émergente, ainsi que la préparation d’un court discours de
                vente afin de convaincre des juges qu’il s’agit de la meilleure solution pour la
                problématique. Les participants devront avoir complètement terminé le prototype
                ainsi que le plan d’affaires avant leur arrivée aux Jeux de Génie. Le “pitch” de
                vente sera effectué devant un groupe de 3 à 5 juges qui choisiront par la suite les
                5 meilleurs produits afin de donner la chance à ces universités d’effectuer leur
                présentation devant tous les participants des jeux de génie lors de la dernière
                journée.
              </p>

              <h2>Les compétitions académiques</h2>
              <p>
                <FloatRight>
                  <Carousel>{[data.acad1, data.acad2]}</Carousel>
                </FloatRight>
                Les épreuves académiques regroupent les six disciplines de génie les plus enseignés
                au Québec en plus de la catégorie génie-conseil. Les compétitions se déroulent lors
                d’un avant-midi durant lequel les équipes doivent répondre à un questionnaire
                théorique et réaliser une épreuve pratique qui prend la forme d’un montage, d’une
                expérience de laboratoire ou d’une étude de cas reliée à un domaine spécifique de
                l’ingénierie. Pour ce faire, chaque délégation se divise en sous-groupes composés de
                quatre à six personnes selon les champs de compétences des participants et
                participantes. Ces derniers relèvent ainsi un défi couvrant tous les sujets abordés
                au cours de leur formation universitaire. Un défi à la hauteur de la relève en
                ingénierie!
              </p>

              <h2>Les compétitions sportives</h2>
              <p>
                <FloatLeft>
                  <Carousel>{[data.acad1, data.acad2]}</Carousel>
                </FloatLeft>
                C’est en s’inspirant de l’adage « un esprit sain dans un corps sain » que les
                compétitions sportives se sont frayées une place au sein du programme de la
                compétition. La journée dédiée à ces épreuves est une occasion pour les délégations
                de se démarquer dans un domaine autre que celui de l’ingénierie et de démontrer leur
                polyvalence. Les tournois sportifs seront non seulement axés sur les habiletés
                athlétiques individuelles mais également sur l’esprit et l’effort d’équipe, deux des
                valeurs les plus importantes de la compétition.
              </p>

              <h2>Les compétitions culturelles</h2>
              <p>
                <FloatRight>
                  <Carousel>{[data.culturelle1]}</Carousel>
                </FloatRight>
                Pour ajouter un peu de divertissement à toutes ces épreuves, des compétitions
                culturelles sont au rendez-vous, soit l’improvisation, les débats oratoires et le
                génie en herbe. Elles permettent aux délégations de faire valoir leurs talents
                cachés et de partager leurs compétences complémentaires à celles nécessaires en
                ingénierie. La compétition d’improvisation s’avère une soirée énergique et haute en
                couleurs, où les équipes mettent à profit leur imagination, leur réceptivité et leur
                rapidité d’exécution. Les débats oratoires, quant à eux, permettent à deux
                participants ou participantes de chaque université de démontrer leurs talents
                d’orateurs. Ceux-ci doivent convaincre les juges en développant un argumentaire sur
                le vif qui supplantera celui de leurs adversaires. Puis, la compétition de génie en
                herbe oppose quatre membres de chaque délégation qui utiliseront leurs connaissances
                générales afin de répondre le plus rapidement possible à des questions de sujets
                variés. Finalement, il ne faut pas oublier la soirée culturelle qui se déroule sous
                le format d’une soirée de réseautage. Il s’agit d’une occasion en or pour échanger
                et agrandir son réseau professionnel auprès des partenaires dans une ambiance des
                plus conviviales.
              </p>
            </Article>
          </>
        )}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />
    </React.Fragment>
  );
};

CompetitionsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default CompetitionsPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  fragment CarouselImage on ImageSharp {
    fixed(width: 500, quality: 90) {
      ...GatsbyImageSharpFixed
    }
  }

  query CompetitionsQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }

    backgrounds: imageSharp(fluid: { originalName: { regex: "/volley/" } }) {
      ...MiniHero
    }

    machine1: imageSharp(fluid: { originalName: { regex: "/machine1/" } }) {
      ...CarouselImage
    }
    machine2: imageSharp(fluid: { originalName: { regex: "/machine2/" } }) {
      ...CarouselImage
    }
    machine3: imageSharp(fluid: { originalName: { regex: "/machine3/" } }) {
      ...CarouselImage
    }
    machine4: imageSharp(fluid: { originalName: { regex: "/machine4/" } }) {
      ...CarouselImage
    }
    machine5: imageSharp(fluid: { originalName: { regex: "/machine5/" } }) {
      ...CarouselImage
    }

    entr1: imageSharp(fluid: { originalName: { regex: "/machine1/" } }) {
      ...CarouselImage
    }

    acad1: imageSharp(fluid: { originalName: { regex: "/acad1/" } }) {
      ...CarouselImage
    }
    acad2: imageSharp(fluid: { originalName: { regex: "/acad2/" } }) {
      ...CarouselImage
    }

    sports1: imageSharp(fluid: { originalName: { regex: "/sports1/" } }) {
      ...CarouselImage
    }
    sports2: imageSharp(fluid: { originalName: { regex: "/sports2/" } }) {
      ...CarouselImage
    }
    sports3: imageSharp(fluid: { originalName: { regex: "/sports3/" } }) {
      ...CarouselImage
    }

    culturelle1: imageSharp(fluid: { originalName: { regex: "/machine1/" } }) {
      ...CarouselImage
    }
  }
`;
