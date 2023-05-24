import './App.css';
import Navbar from './components/newsapi/Navbar'
import SearchFungsi from './components/newsapi/SearchFung';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <br></br>
       <h1>Portal Web Berita</h1>
       <br></br>
       <div className='Berita-container'>
       <SearchFungsi/>
       </div>
    </div>
  );
}

export default App;
