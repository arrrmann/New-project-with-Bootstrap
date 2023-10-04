import { Card } from 'react-bootstrap'

export default function NewsCard({ card }) {
  const {imgSrc, title, text}=card
    return (
        <Card className="mb-4">
          <Card.Img variant='top' src={imgSrc} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
    )
  }
