import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Landingpage() {
  return (
    <>
      <Container className='mt-5'>
        <Row className='d-flex justify-content-center align-items-center mt-5'>

          <Col sm={12} md={6}>

            <h4>Welcome to <span className='text-warning'>Media Player</span></h4>
            <p style={{ textAlign: 'justify' }} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum cum nemo non dolor. Voluptate delectus asperiores maiores qui eum, optio magni veritatis temporibus deleniti accusamus a doloremque officiis nihil.</p>
            <Link to={'/home'}><button className='btn btn-warning mt-4'>Get started</button> </Link>
          </Col>

          <Col sm={12} md={6} className='d-flex justify-content-center'>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif " alt="no image" className='w-50' />
          </Col>
        </Row>
      </Container>


      <div className="container-fluid mt-5"> 
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h4 className='text-center'>Features</h4>
            <div className="row mt-5">
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" className='w-100' height={'300px'}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text> 
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 mt-md-0">
              <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" className='w-100' height={'300px'}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text> 
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 mt-md-0">
              <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" className='w-100' height={'300px'}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text> 
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

    </>
  )
}

export default Landingpage
