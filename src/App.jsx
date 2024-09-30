import axios from 'axios';
import React,{useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import BasicList from './components/BasicList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  const [selection, setSelection] = useState();
  const [items, setItems] = useState([]);

  useEffect(() => {
      // const fetchAPI = () => {
        console.log(selection);
        axios.get(`https://rickandmortyapi.com/api/${selection}`)
        .then(response => {
          console.log("response : ",  response);
          setItems(response.data.results)
          console.log("items : ", items)})
        .catch(error => {console.log(error)})
      // }
    },[selection],
  )
  
  return (
    <>
      <Container className='m-2'>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
          <Form.Select aria-label="Default select example" onChange={(choice) => setSelection(choice.target.value)}>
              <option>Open this select menu</option>
              <option value="character">Charachter</option>
              <option value="episode">Episode</option>
              <option value="location">Location</option>
            </Form.Select>
            <h3>Result of your selection</h3>
            {
              items.map(item => {
                return <BasicList itemID={item.id} itemName={item.name}></BasicList>
              })
            }
          </Col>
        </Row>
      </Container>
      
    </>

  )
}

export default App

function BasicExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}