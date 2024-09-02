import { Container, Row, Col } from "react-bootstrap";
import aboutUsImg from "../Images/xmm-img1.png";
import tick from "../Images/xmm-tick.png";

export const AboutUs = () => {
    return (
            <section className="aboutUs" id="aboutUs">
              <Container>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                        <div>
                          <img src={aboutUsImg} alt="About Us Image"/>
                        </div>
                  </Col>
                  <Col xs={12} md={6} xl={6}>
                      <div>
                      <span className="tagline">About Us</span>
                      <h1>Best Ever Token Designed For Remarkable Success</h1>
                        <p>{`The main advantage of supporting $XMM is the project is focused on creating Volume and Market Making through. XMM empowers businesses to creative dynamic content target specific`} </p>
                        <div className="advantages-container">
                          <Container>
                            <Row>
                        <Col xs={12} md={6} xl={3}>
                        <div className="advantage-item">
                        <img src={tick} alt="XMM Tick"/>

                          <label>Market</label>
                        </div>
                        </Col>
                        <Col xs={12} md={6} xl={3}>
                        <div className="advantage-item">
                        <img src={tick} alt="XMM Tick"/>

                          <label>Volume</label>
                        </div>
                        </Col>
                        <Col xs={12} md={6} xl={6}>

                        <div className="advantage-item">
                        <img src={tick} alt="XMM Tick"/>

                          <label>Trend</label>
                        </div>
                       </Col>
                       </Row>
                       </Container>
                       </div>
                       <button onClick={() => console.log('readWhitepaper')}>Read Whitepaper</button>
                     </div>
                  </Col>
                </Row>
              </Container>
            </section>
    );
};