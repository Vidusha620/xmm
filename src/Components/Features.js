import { Container, Row, Col } from "react-bootstrap";
import xmmIcon1 from "../Images/xmm-icon1.png";
import xmmIcon2 from "../Images/xmm-icon2.png";
import xmmIcon3 from "../Images/xmm-icon3.png";



export const Features = () => {
    return (
        <section className="features" id="features">
          <Container>
            <Row>
              <Col xs={12} md={6} xl={3}>
                  <div>
                  <span className="tagline">Features</span>
                  <h1>Features Of X MARKET MAKER</h1>
                    <p>X Market Maker offers a<br/> 
                    comprehensive set of features<br/>
                      tailored for market participants.<br/>
                      Its core functionalities include<br/> 
                      real-time pricing,liquidity.</p>
                 </div>
              </Col>
              <Col xs={12} md={6} xl={3}>
              <Container>
                    <div class="child-container">
                      <h6>01</h6>
                      <h6><b>Benifits For Holders</b></h6>
                      <img src={xmmIcon1} alt="XMM Icon 1"/>
                      <p>We aim to increase the value of<br/>
                       our currency to benefit our<br/>
                       community.Market Making will<br/>
                       be key focus. We aim to increase<br/>
                       the value of our currency to<br/>
                       benefit our community.</p>

                    </div>
              </Container>
              </Col>
              
              <Col xs={12} md={6} xl={3}>
              <Container>
                    <div class="child-container">
                      <h6>02</h6>
                      <h6>Biggest Community</h6>
                      <img src={xmmIcon2} alt="XMM Icon 2"/>
                      <p>XMM is the first ever Crypto with<br/>
                       the market making objective<br/>
                       that's being worked upon at<br/>
                       such amazing level! We will<br/>
                       focus on community building a<br/>
                       lot for that.</p>
                      </div>
                </Container>
              </Col>
              <Col xs={12} md={6} xl={3}>
              <Container>
                    <div class="child-container">
                      <h6>03</h6>
                      <h6>Ecosystem - Redefined</h6>
                      <img src={xmmIcon3} alt="XMM Icon 3"/>
                      <p>Our powerful token will protect<br/>
                      our holders from the turbulance<br/>
                      of the crypto market and help<br/>
                      them hold despite the<br/>
                      uncertinity of the market.</p>
                      </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </section>
      );
};
