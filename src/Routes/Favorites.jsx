import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

const Favorites = () => {  
  const {setArr} = useGlobalContext()
  const favourites =  JSON.parse(localStorage.getItem("arr"))

  const clearFav = () =>{setArr(localStorage.setItem("arr", JSON.stringify([])))}
  return (
    <div className="fav vista">
      <button onClick={clearFav} >Borrar todos</button>
      <h1>Dentistas favoritos</h1>
      <div className="card-grid">
        {}
        {}
        {favourites.map((favourites) => 
        <Card key={favourites.id} name={favourites.name} username={favourites.username} id={favourites.id} showButton={false}/>
    )}
      </div>
    </div>
  );
};

export default Favorites;