import { Link, useNavigate } from 'react-router-dom'
import {  useGlobalContext } from './utils/global.context'
import "../Styles/navbar.css"

const Navbar = () => {

  const {stateTheme, dispatchTheme} =  useGlobalContext()
  const changeTheme = ()=>{
    if (stateTheme.t) {
      dispatchTheme({type: 'DARK'}) 
    } else {dispatchTheme({type: 'LIGHT'})} 
  }

  return (
  <div className="navbar">
      <div className='odonto'>
          <h4>Odontologia</h4>
      </div>
      <nav> 
      
        {}
        <Link  to="/"><p className='nav-h3' >Inicio</p></Link>
        <Link  to="/contact"><p className='nav-h3'>Contacto</p></Link>
        <Link  to="/favs"><p className='nav-h3'>Favoritos</p></Link>

        {}
        <button className="theme-btn"  onClick={changeTheme } >{stateTheme.t?  " NIGHTMODE 🌙" : " DAYMODE ☀️"} </button>
      </nav>
    </div>
  )
}

export default Navbar