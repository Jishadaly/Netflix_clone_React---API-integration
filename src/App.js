
import NavBar from "./component/NavBar/NavBar";
import './App.css'
import Banner from "./component/Banner/Banner";
import RowPost from "./component/RowPost/RowPost";
import {originals , actions , trending ,comedyMovies, horrorMovies,actionMovies,romanceMovies,documentaries } from './urls'
import { BrowserRouter as Router ,Routes, Route , Switch  } from "react-router-dom";
import Signup from "./component/SignUp/Signup";


function App() {
  console.log("Runnning") 
  return (
    <Router>
    <div className= "App" >
    <NavBar/>
        <Routes>  
      <Route path="/" element ={
        <> 
        <Banner/>
        <RowPost url = {trending} title = {'Trending'} isSmall />
        <RowPost url = {actions} title = {'Action'}  />
        <RowPost url = {originals } title = {'Netflix Orginal'}  />
        
        <RowPost url = {comedyMovies} title = {'Comedy Movies'}  />
        <RowPost url = {horrorMovies} title = {'Horror Movies'} isSmall />
        <RowPost url = {actionMovies} title = {'Action Movies'} isSmall />
        <RowPost url = {documentaries} title = {'Documenteries'}  />
        </>
      }>    
      
      </Route>
      <Route path="/login" element={<Signup />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

