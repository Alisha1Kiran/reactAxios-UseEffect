import React from 'react'
import Table from 'react-bootstrap/Table';

const BasicTable = ({itemID, itemName}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{itemID}</td>
          <td>{itemName}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default BasicTable