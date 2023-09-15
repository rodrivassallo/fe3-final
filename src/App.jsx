import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Favorites from "./Routes/Favorites";
import Home from "./Routes/Home";
import { useGlobalContext } from "./Components/utils/global.context";
import DentistDetail from "./Routes/DentistDetail";


function App() {

  const{stateTheme} = useGlobalContext()
  return (
      <div className={stateTheme.t ? 'App' : 'dark'}>
        <Navbar/>  
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/dentist/:{id}' element={<DentistDetail/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/favs' element={<Favorites/>} />
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;