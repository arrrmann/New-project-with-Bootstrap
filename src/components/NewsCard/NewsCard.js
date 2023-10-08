import { Card } from 'react-bootstrap'

export default function NewsCard({ card, handleClick }) {
  const {imgSrc, title, text}=card
    return (
        <Card className="mb-4" onClick={ ()=>handleClick(card) } styles={{minHeight:'320px'}}>
          <Card.Img variant='top' src={imgSrc} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
    )
  }
