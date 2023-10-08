import { Col, Card } from "react-bootstrap"
import cn from 'classnames'
import styles from './full-news.module.css'

export default function FullNews({selectedNews}){
    const {title, imgSrc, fullText, pubYear}=selectedNews

    return(
        <Col md={12} className={cn('d-flex justify-content-center align-items-center', {[styles.fullNewsCard]:true})}>
            <Card className={cn("mt-5 mb-5", {[styles.newsCard]:true} )}>
                <Card.Img variant='top' src={imgSrc}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{fullText}
                        <span className={cn('mt-3 mb-2', {[styles.newDate]: true})}> {pubYear} </span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}