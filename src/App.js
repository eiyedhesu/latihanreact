import './App.css';
import Navbar from './components/newsapi/Navbar'
import SearchBar from './components/newsapi/Search';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <br></br>
       <h1>Portal Web Berita</h1>
       <br></br>
       <div className='Berita-container'>
       <SearchBar/>
       </div>
    </div>
  );
}

export default App;
