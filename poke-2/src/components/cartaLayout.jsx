import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

import capitalize from "./capitalize";

export default function CartaLayout(props) {

  const {id, pokemon} = props;
  const {name, imageUrl} = pokemon;
  const navigate = useNavigate();

  const handleOnClick = (e) =>{
    e.stopPropagation();
    navigate('/pokemon', { state: { pokemon: pokemon } })

  }

  return (
    <MDBCard className='w-75 mx-auto my-2'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay mx-auto square border-bottom'>
        <MDBCardImage src={imageUrl} fluid alt='...' />
{/*         <a href='!#'>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a> */}
      </MDBRipple>
      <MDBCardBody >
        <MDBCardTitle className='text-center'>{capitalize(name)}</MDBCardTitle>
        <MDBCardText className='text-center'>
          ID = {id}
        </MDBCardText>
        <div className='text-center'>
          <MDBBtn size='sm' id={name} onClick={(e)=>handleOnClick(e)}>Esamina</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}