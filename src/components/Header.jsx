import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar className="bg-transparent">
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{textDecoration:'none'}}><h4 className='text-warning'> <FontAwesomeIcon icon={faVideo} beat className='me-3' /> Media Player</h4> </Link>    
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header 
