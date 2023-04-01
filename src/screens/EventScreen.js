import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Activity from '../components/Activity'
import activities from '../activities'


const EventScreen = () => {
  return (
    <>
      <h1>Latest Events</h1>
      <Row className='d-flex flex-column-reverse'>
        {activities.map(activity => (
            <Col key={activity._id} sm={12} md={12} >
                <Activity activity={activity} />
            </Col>
        ))}
      </Row>
    </>
  )
}

export default EventScreen
