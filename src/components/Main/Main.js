import { cardsArray, tableArrayData} from './data.js'
import { Table, Container, Card, Button } from "react-bootstrap"
import { FaCheck } from "react-icons/fa6"

export default function Main() {

  const cardsData = cardsArray.map((card) => {
    return (
      <Card className="text-center mt-5 fs-5"
        style={{ width: '296px', height: "330px" }}>
        <Card.Header as="h4" className="d-flex flex-column align-items-center justify-content-evenly"
          style={card.priority ?
            { backgroundColor: '#0275d8', height: "62px", color: 'white' } :
            { backgroundColor: '#F8F8F8', height: "62px" }}>
          {card.title}
        </Card.Header>
        <Card.Body className="d-flex flex-column align-items-center justify-content-evenly">
          <Card.Title as="h2">{card.price}</Card.Title>
          <Card.Text className=" fw-normal">{card.description}</Card.Text>
          <Button size="lg" className="w-100" variant={card.btnType}>{card.btnText}</Button>
        </Card.Body>
      </Card>
    )
  })

  const tableBody = tableArrayData.map((item) => {
    return (
      <tr>
        <th>{item.content}</th>
        <td>{item.isFree ? <FaCheck /> : null}</td>
        <td>{item.isPro ? <FaCheck /> : null}</td>
        <td style={{ paddingLeft: '35px' }}>{item.isEnterprise ? <FaCheck /> : null}</td>
      </tr>
    )
  })

  return (
    <div>
      <Container className="text-center" style={{ maxWidth: "700px" }}>
        <h1 className="display-4 fw-normal"> Pricing</h1>
        <p className="fs-5 text-body-secondary">
          Quickly build an effective pricing table for your potential customers with this
          Bootstrap example. It built with default Bootstrap components and utilities with
          little customization.
        </p>
      </Container>
      <Container className="d-flex justify-content-evenly">
        {cardsData}
      </Container>
      <Container className="text-center">
        <h2 className="mt-5 display-6" >Compare plans</h2>
      </Container>
      <Table className="mx-auto mt-2 mb-2" style={{ maxWidth: '1000px' }}>
        <thead>
          <tr>
            <th style={{ width: "400px" }}></th>
            <th style={{ width: "200px" }}>Free</th>
            <th style={{ width: "200px" }}>Pro</th>
            <th style={{ width: "200px" }}>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </Table>
    </div>
  )
}
