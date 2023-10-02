import { Card, Container, Row, Col } from 'react-bootstrap'

export default function NewsCard({ newsCardsArray }) {
  const newsData = newsCardsArray.map((card, idx) => {
    return (
      <Col lg={3} md={4} sm={6} xs={12} key={idx}>
        <Card className="mb-4">
          <Card.Img variant='top' src={card.imgSrc} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  })

  return (
    <Container>
      <Row>
        {newsData}
      </Row>
    </Container>
  )
}