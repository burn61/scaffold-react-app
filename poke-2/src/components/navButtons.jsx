// https://bobbyhadz.com/blog/react-pass-data-from-child-to-parent

import React from 'react'
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";


function NavButtons(props) {
  const {handleClick} = props;

  return (
    <>
        <MDBContainer className="mt-4 text-center">
            <MDBBtn size="sm" className="m-3 btn-fixed-width" onClick={event => handleClick(-1)}>Indietro</MDBBtn>
            <MDBBtn size="sm" className="m-3 btn-fixed-width" onClick={event => handleClick(1)}>Avanti</MDBBtn>
        </MDBContainer>
    </>
  )
}

export default NavButtons