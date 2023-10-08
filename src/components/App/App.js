import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Header from "../Header"
//import Main from "../Main" //gnayin cartshkeq mekel table-ov plyusnery
import NewsCard from "../NewsCard"
import FullNews from "../FullNews"
//import UserCard from "../UserCard"

export default function App() {
  const [selectedNews, setSelectedNews]=useState(null)
  const [isClosed, setIsClosed]=useState(true)

  const handleClick=(card)=>{
    if(selectedNews && selectedNews.id === card.id){
    setIsClosed((prev) => !prev)
  }else{
    setSelectedNews(card)
    setIsClosed(false)
    }
  }

  const newsCardsArray = [
    {
      title: 'First News', text: 'Somew new News about last image the big is like a high figthlike this is isvalid valid mainu usc',
      imgSrc: '/images/1img.jpeg', id: 1, fullText: "The full text pf first new block this is full information about this new it has published one year ago  this is my pussy taste like pepsi colea lal la", 
      pubYear: '17.03.2020'
    },
    {
      title: 'Second News', text: 'Somew new News about last image the big is like a high figthlike this is isvalid valid mainu usc',
      imgSrc: '/images/2img.jpeg', id: 2, fullText: "The full text pf second new block this is full information about this new it has published one year ago  this is my pussy taste like pepsi colea lal la", 
      pubYear: '09.01.2018'
    },
    {
      title: 'Third News', text: 'Somew new News about last image the big is like a high figthlike this is isvalid valid mainu usc',
      imgSrc: '/images/3img.jpeg', id: 3, fullText: "The full text pf third new block this is full information about this new it has published one year ago  this is my pussy taste like pepsi colea lal la", 
      pubYear: '19.10.2023'
    },
    {
      title: 'Fourth News', text: 'Somew new News about last image the big is like a high figthlike this is isvalid valid mainu usc',
      imgSrc: '/images/4img.jpeg', id: 4, fullText: "The full text pf fourth new block this is full information about this new it has published one year ago  this is my pussy taste like pepsi colea lal la", 
      pubYear: '15.05.2021'
    },
  ]

  return (
    <div>
      <Header />
      <Container className="mt-5 mb-5">
        <h1>News.am</h1>
        <p>News.am...First News web application bilt by React app, is new news web page from professionals who provides a real information about Armenia</p>
      </Container>
      <Container>
        <Row>
          {
            newsCardsArray.map((card) => {
              return (
                <Col lg={3} sm={6} xs={12} key={card.id}>
                  <NewsCard card={card} handleClick={handleClick}/>
                </Col>
              )
            })
          }
        </Row>
        {
          selectedNews && !isClosed ? <Row className="mb-5"> <FullNews selectedNews={selectedNews}/> </Row> : null
        }
      </Container>
      <footer className="bg-dark text-white text-center p-3">
        <Container>
          &copy; 20203 NewsPortal: All rights Reserved
        </Container>
      </footer>
    </div>
  )
}

