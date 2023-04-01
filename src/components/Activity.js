import React from 'react'
import { Card } from 'react-bootstrap'

const Activity = ({ activity }) => {
  return (
    <Card style={{ width: '70rem' }} className='my-1 p-1 rounded '>
      <Card.Body>
          <Card.Title as='h3' >
            <strong>{activity.title}</strong>
          </Card.Title>
        <Card.Text as='div'>
          <div className='my-1'>{activity.description}</div>
        </Card.Text>
          <div className='d-flex justify-content-between py-2'>
          <img src={activity.image} height="500px" width="515px" alt="not found"/>
          <img src={activity.image1} height="500px" width="515px" alt=""/>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Activity
