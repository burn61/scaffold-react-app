import { useState, useEffect } from "react";

import { MDBRow } from "mdb-react-ui-kit";
import FetchManyPoke from "./fetchManyPoke";
import NavButtons from "./navButtons";

function PokemonGallery(props) {
  const { limit, offset: x } = props;
  
  const [offset, setOffset] = useState(x);
  const [data, setData] = useState(null);
  
  const sfoglia = (i) => {
    if (i < 0 && offset === 0) return;
    const y = offset + limit * i;
    if (i > 0 && y > window.$maxResource - 1) return;
    setOffset(y);
  };

  useEffect(() => {
    setData(<FetchManyPoke limit={limit + ""} offset={offset + ""} />);
  }, [offset, limit]);

  return (
    <>
      <MDBRow className="mt-3">{data}</MDBRow>
      <NavButtons handleClick={sfoglia} />
    </>
  );
}

export default PokemonGallery;
