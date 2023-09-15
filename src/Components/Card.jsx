import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useGlobalContext } from "./utils/global.context";

const Card = ({ name: cardname, username, id, showButton }) => {

const { setArr } = useGlobalContext();
const [selectedDentist, setSelectedDentist] = useState();
const url = `https://jsonplaceholder.typicode.com/users/${id}`;

useEffect(() => {
fetch(url)
    .then((res) => res.json())
    .then((data) => setSelectedDentist(data));
}, [url]);

const addFav = () => {
const array = JSON.parse(localStorage.getItem('arr'));
const existsDentist = array.find((elemento) => elemento.id === selectedDentist.id);
if (existsDentist) {
    alert('No se puede agregar, el dentista ya se encuentra agregado');
} else {
    alert('Se agregó el dentista');
    array.push(selectedDentist);
    localStorage.setItem('arr', JSON.stringify(array));
    setArr(array);
}
}

const removeCard = () => {
const array = JSON.parse(localStorage.getItem("arr"));
const index = array.findIndex((elemento) => elemento.id === selectedDentist.id);
if (index > -1) {
    array.splice(index, 1);
    localStorage.setItem("arr", JSON.stringify(array));
    setArr(array);
}
};

return (
<div className="card">
    {}

    <Link key={id} to={`/dentist/${id}`} >

    <div>
        <img className="card-img"  src="/images/doctor.jpg" alt="Odontologo" width={200}/>
        <h4>{cardname}</h4>
        <h3>{username}</h3>
    </div>

    </Link>

    {}
    {}
    {showButton ?
        <button onClick={addFav} className="favButton">
        Añadir a favoritos
        </button> :
        <button onClick={removeCard} className="favButton">
        Eliminar de favoritos
        </button>
    }
</div>
);
};

export default Card;