import { Container, Row, Col } from "react-bootstrap";
import xmmHero from "../Images/xmm-hero.png";
import user1 from "../Images/user1.jpg";
import user2 from "../Images/user2.jpg";
import user3 from "../Images/user3.jpg";



export const Banner = () => {
    return (
        <section className="banner" id="home">
          <Container>
            <h1>MARKETING MAKING WITH XMM.</h1>

          </Container>
          <Container>
          <Row>

            <Col xs={12} md={6} xl={6}>
            <div>            
                    <p>XMM empowers businesses to create dynamic content, target<br/>
                    specific demographics, and optimize their digital presence.</p>
                    <Row>
                    <Col xs={12} md={6} xl={3}>
                    <button onClick={() => console.log('joinTelegram')}>Join Telegram</button>
                    </Col>
                    <Col xs={12} md={6} xl={9}>
                     <div className="users">
                      <img src={user1} alt="User 1" className="user" />
                      <img src={user2} alt="User 2" className="user" />
                      <img src={user3} alt="User 3" className="user" />
                    </div>
                    </Col>
                    </Row>
                    <h2>{'OUR HAPPY CUSTOMERS'}</h2>
                      <h3>Our happy customers are at the heart<br/>
                      of everything we do</h3>
                 </div>
              </Col>
              <Col xs={12} md={6} xl={6}>
                    <div>
                      <img src={xmmHero} alt="XMM Hero Image"/>
                    </div>
              </Col>
            </Row>
          </Container>
        </section>
      );
};