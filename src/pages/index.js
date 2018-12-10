import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Waypoint from "react-waypoint";

import Layout from "../components/layout";
import Header from "../components/Header";
import Nav from "../components/Nav";
import pic01 from "../assets/images/pic01.jpg";
import machine from "../assets/images/machine.jpg";
import genieEnHerbe from "../assets/images/genie_en_herbe.jpg";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    };
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  };

  render() {
    return (
      <Layout>
        <Helmet title="Jeux de Génie 2020" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main special">
            <header className="major">
              <h2>Les Jeux 2020</h2>
              <p style={{ textAlign: "justify" }}>
                Du 4 au 8 janvier 2019, l’Université de Sherbrooke sera l’hôte
                de la prochaine édition des Jeux de Génie. Pour l’occasion, le
                comité organisateur invite les 425 participants et participantes
                à atteindre de nouveaux sommets dans le cadre de leurs fonctions
                en ingénierie. Les 12 universités participantes s’affronteront
                dans diverses épreuves qui feront appel à leurs aptitudes
                académiques, sportives et culturelles. Il ne suffit donc pas
                d’avoir de bonnes connaissances en ingénierie. Les Jeux de Génie
                sont à la recherche des meilleurs, de la crème de la crème, de
                ceux qui n’ont pas froid aux yeux et qui sont prêts à tout pour
                entreprendre l’escalade jusqu’au sommet. Saurez-vous atteindre
                le sommet avant vos concurrents? Sherbrooke vous met au défi de
                montrer à tous que votre université ne craint pas l’altitude, en
                remportant la mythique coupe des Jeux de Génie!
              </p>
            </header>
          </section>

          <section>
            <span className="image main" style={{marginBottom: 0}}>
              <img src={genieEnHerbe} alt="" style={{borderRadius: 0}} />
            </span>
          </section>

          <section id="history" className="main special">
            <header className="major">
              <h2>L’Historique</h2>
              <p style={{ textAlign: "justify" }}>
                C’est à l’Université Laval, en 1990, qu’ont eu lieu les tout
                premiers Jeux de Génie du Québec. Depuis maintenant 29 ans,
                cette compétition interuniversitaire donne aux étudiants et
                étudiantes des facultés de génie de la province l’occasion de se
                côtoyer dans un esprit de franche camaraderie. Depuis sa
                création, la notoriété de l’événement n’a cessé de croître au
                sein de la communauté universitaire du Québec. La relève la plus
                talentueuse, la plus motivée et la plus engagée s’y retrouve.
                C’est sous l’égide de la Confédération pour le rayonnement
                étudiant en Ingénierie au Québec (CRÉIQ) que les Jeux sont
                organisés chaque année.
              </p>
            </header>
          </section>

          <section id="competitions" className="main special">
            <header className="major">
              <h2>Compétitions</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style5">
                  <img
                    src={machine}
                    width="225"
                    height="225"
                    style={{ borderRadius: "100%", display: "block" }}
                  />
                </span>
                <h3>La Machine</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond" />
                <h3>Entreprenariat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy" />
                <h3>Académiques</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond" />
                <h3>Sports</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond" />
                <h3>Culturelles</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    En Savoir Plus
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="intro_old" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Ipsum sed adipiscing</h2>
                </header>
                <p>
                  Sed lorem ipsum dolor sit amet nullam consequat feugiat
                  consequat magna adipiscing magna etiam amet veroeros. Lorem
                  ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                  ipsum dolor sit amet aliquam.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Magna veroeros</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code" />
                <h3>Ipsum consequat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy" />
                <h3>Amed sed feugiat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond" />
                <h3>Dolor nullam</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork" />
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o" />
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal" />
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop" />
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond" />
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Index;
