import { Card, Button } from 'react-bootstrap'
import { FaSquareInstagram, FaFacebook, FaTwitter } from "react-icons/fa6"
import styles from './usercard.module.css'

export default function UserCard() {
    return (
        <Card className='d-flex flex-column justify-content-center align-items-center' style={{borderRadius: "50px"}}>
            <div className={styles.badge}></div>
            <Card.Img src="/images/2img.jpeg" alt="profile_image" className={styles.userImage} />
            <Card.Body className="mt-4 text-center">
                <Card.Title >Arman</Card.Title>
                <Card.Subtitle> Product Design
                    <div className="mt-3 mb-3 border-top border-3"></div>
                </Card.Subtitle>
                <Card.Text>I choose the product design track because i love solving visual problems using UI/UX designs</Card.Text>
                </Card.Body>
                <Card.Footer className={styles.cardFooter}>
                    <Button> <FaSquareInstagram/> </Button>
                    <Button> <FaFacebook/> </Button>
                    <Button> <FaTwitter/> </Button>
                </Card.Footer>
        </Card>
    )
}