import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const BasicList = ({itemID, itemName}) => {
  return (
    <ListGroup horizontal>
      <ListGroup.Item variant="info">{itemID}</ListGroup.Item>
      <ListGroup.Item variant="info">{itemName}</ListGroup.Item>
    </ListGroup>
  )
}

export default BasicList