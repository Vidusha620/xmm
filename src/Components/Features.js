import { Container, Row, Col } from "react-bootstrap";
import xmmIcon1 from "../Images/xmm-icon1.png";
import xmmIcon2 from "../Images/xmm-icon2.png";
import xmmIcon3 from "../Images/xmm-icon3.png";



export const Features = () => {
    return (
        <section className="features" id="features">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={3}>
                  <div>
                  <span className="tagline">Features</span>
                  <h1>Features Of X MARKET MAKER</h1>
                    <h2>X Market Maker offers a comprehensive set of features tailored for market participants.Its core functionalities include real-time pricing,liquidity.</h2>
                 </div>
              </Col>
              <Col xs={12} md={6} xl={3}>
                    <div>
                      <h1>01</h1>
                      <h2>Benifits For Holders</h2>
                      <img src={xmmIcon1} alt="XMM Icon 1"/>
                      <h3>We aim to increase the value of our currency to benefit our community.Market Making will be key focus. We aim to increase the value of our currency to benefit our community.</h3>

                    </div>
              </Col>
              <Col xs={12} md={6} xl={3}>
                    <div>
                      <h1>02</h1>
                      <h2>Biggest Community</h2>
                      <img src={xmmIcon2} alt="XMM Icon 2"/>
                      <h3>XMM is the first ever Crypto with the market making objective that's being worked upon at such amazing level!We will focus on community building a lot for that.</h3>

                    </div>
              </Col>
              <Col xs={12} md={6} xl={3}>
                    <div>
                      <h1>03</h1>
                      <h2>Ecosystem - Redefined</h2>
                      <img src={xmmIcon3} alt="XMM Icon 3"/>
                      <h3>Our powerful token will protect our holders from the turbulance of the crypto market and help them hold despite the uncertinity of the market.</h3>

                    </div>
              </Col>
            </Row>
          </Container>
        </section>
      );
};
