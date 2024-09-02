import { Container, Row, Col } from "react-bootstrap";
import aboutUsImg from "../Images/xmm-img1.png";

export const AboutUs = () => {
    return (
            <section className="aboutUs" id="aboutUs">
              <Container>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl={5}>
                        <div>
                          <img src={aboutUsImg} alt="About Us Image"/>
                        </div>
                  </Col>
                  <Col xs={12} md={6} xl={7}>
                      <div>
                      <span className="tagline">About Us</span>
                      <h1>Best Ever Token Designed For Remarkable Success</h1>
                        <h6>{`The main advantage of supporting $XMM is the project is focused on creating Volume and Market Making through. XMM empowers businesses to creative dynamic content target specific`} </h6>
                        <div className="advantages-container">
                        <div className="advantage-item">
                          <input type="checkbox" checked readOnly />
                          <label>Market</label>
                        </div>
                        <div className="advantage-item">
                          <input type="checkbox" checked readOnly />
                          <label>Volume</label>
                        </div>
                        <div className="advantage-item">
                          <input type="checkbox" checked readOnly />
                          <label>Trend</label>
                        </div>
                      </div>
                          <button onClick={() => console.log('readWhitepaper')}>Read Whitepaper</button>
                     </div>
                  </Col>
                </Row>
              </Container>
            </section>
    );
};