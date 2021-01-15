import React from 'react'
import useDetails from '../helpers/useDetails';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const { details, loading, error  } = useDetails(id);
  return (
    <div>
       { JSON.stringify(details) }
    </div>
  )
}

export default Details;
