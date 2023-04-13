import './App.css';
import AboutUs from './components/About';
import FormContact from './components/Contact';
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import ProductUS from './components/Product';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <br></br>
      <Intro/>
      <br></br>
      <AboutUs/>
      <br></br>
      <ProductUS/>
      <br></br>
      <FormContact/>
    </div>
  );
}

export default App;
