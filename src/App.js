import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/newsapi/Navbar'
import SearchFungsi from './components/newsapi/SearchFung';
function App() {
  return (
    <div className="App">
       <Navbar/>
       
       <h1>Portal Web Berita</h1>
       
       <div className='Berita-container'>
       <SearchFungsi/>
       </div>
       <Outlet/>
    </div>
  );
}

export default App;
