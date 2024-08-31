import { Container, Row, Col } from "react-bootstrap";
import xmmHero from "../Images/xmm-hero.png";
import Arrow from "../Images/arrow.png";


export const Banner = () => {
    return (
        <section className="banner" id="home">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
                  <div>
                    <span className="tagline">MARKETING MAKING WITH XMM.</span>
                    <h3>{`XMM empowers businesses to create dynamic content, target specific demographics, and optimize their digital presence.`} </h3>
                    <h1>{'OUR HAPPY CUSTOMERS'}</h1>
                      <h2>Our happy customers are at the heart of everything we do...</h2>
                      <button onClick={() => console.log('connect')}>
                         <img src={Arrow} alt="Arrow Icon" style={{ width: 25, height: 'auto' }} />
                      </button>
                 </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                    <div>
                      <img src={xmmHero} alt="XMM Hero Image"/>
                    </div>
              </Col>
            </Row>
          </Container>
        </section>
      );
};