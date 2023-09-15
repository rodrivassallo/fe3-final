import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DentistDetail() {
  const { id } = useParams();
  const [dentist, setDentist] = useState({});

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setDentist(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>Detalle del Dentista</h1>
      <p>Nombre: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Teléfono: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  );
}

export default DentistDetail
