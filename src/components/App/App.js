import { Col, Container, Row } from "react-bootstrap"
import Header from "../Header"
//import Main from "../Main" //gnayin cartshkeq mekel table-ov plyusnery
import NewsCard from "../NewsCard"
import UserCard from "../UserCard"

export default function App() {
  const newsCardsArray = [
    { title: 'First News', text: 'Somew new News about last image the big is like a high figthlike this is isvalid valid mainu usc', imgSrc: '/images/1img.jpeg', id: 1 },
    { title: 'Second News', text: 'Somew new News about last image the big is like a high figthlike this is isvalid valid mainu usc', imgSrc: '/images/2img.jpeg', id: 2 },
    { title: 'Third News', text: 'Somew new News about last image the big is like a high figthlike this is isvalid valid mainu usc', imgSrc: '/images/3img.jpeg', id: 3 },
    { title: 'Fourth News', text: 'Somew new News about last image the big is like a high figthlike this is isvalid valid mainu usc', imgSrc: '/images/4img.jpeg', id: 4 },
  ]

  return (
    <div>
      <Header />
      <Container className="mt-5 mb-5">
        <h1>News.am</h1>
        <p>News.am...First News web application bulit by React app, is new news web page from professionals who provides a real information about Armenia</p>
      </Container>
      <Container>
        <Row>
          <Col lg={4}>
            <UserCard/> 
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {
            newsCardsArray.map((card) => {
              return (
                <Col lg={3} sm={6} xs={12} key={card.id}>
                  <NewsCard card={card} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <footer className="bg-dark text-white text-center p-3">
        <Container>
            &copy; 20203 NewsPortal: All rights Reserved
        </Container>
      </footer>
    </div>
  )
}

