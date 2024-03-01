
import NavBar from "./component/NavBar/NavBar";
import './App.css'
import Banner from "./component/Banner/Banner";
import RowPost from "./component/RowPost/RowPost";
import {originals , actions , trending ,comedyMovies, horrorMovies,actionMovies,romanceMovies,documentaries } from './urls'


function App() {
  return (
    <div className= "App" >
      
      <NavBar/>
      <Banner/>
      <RowPost url = {originals } title = {'Netflix Orginal'} />
      <RowPost url = {actions} title = {'Action'} isSmall />
      <RowPost url = {trending} title = {'Trending'} isSmall />
      <RowPost url = {comedyMovies} title = {'Comedy Movies'}  />
      <RowPost url = {horrorMovies} title = {'Horror Movies'} isSmall />
      <RowPost url = {actionMovies} title = {'Action Movies'} isSmall />
      <RowPost url = {documentaries} title = {'Documenteries'}  />
      
      
    </div>
  );
}

export default App;
