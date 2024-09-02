import { Container, Row, Col } from "react-bootstrap";
import xmmHero from "../Images/xmm-hero.png";


export const Banner = () => {
    return (
        <section className="banner" id="home">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
                  <div>
                    <h1>MARKETING MAKING WITH XMM.</h1>
                    <h4>{`XMM empowers businesses to create dynamic content, target specific demographics, and optimize their digital presence.`} </h4>
                    <button onClick={() => console.log('joinTelegram')}>Join Telegram</button>
                    <h2>{'OUR HAPPY CUSTOMERS'}</h2>
                      <h3>Our happy customers are at the heart of everything we do...</h3>
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