import React from 'react'
import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context';

const Home = () => {
  const {apiState} =  useGlobalContext();

  return (
    <main className="home" >
      <h1>Inicio</h1>
      <div className='card-grid'>
        {}
        {apiState.map((value) =>
            <Card  key={value.id} name={value.name} username={value.username} id={value.id} showButton={true}/>
        )}
      </div>
    </main>
  )
}

export default Home