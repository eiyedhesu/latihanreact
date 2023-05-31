// import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/newsapi/Navbar'
// import SearchFungsi from './components/newsapi/SearchFung';
import Redux from './components/Redux';
function App() {
  return (
    <div className="App">
       <Navbar/>
       
       <h1>Portal Web Berita</h1>
       
       {/* <div className='Berita-container'>
       <SearchFungsi/>
       </div> */}
       <Redux/>
       
    </div>
  );
}

export default App;
