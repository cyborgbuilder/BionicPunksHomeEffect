import './App.css';
import Banner from './components/Banner'
import Blank from './components/Blank';
import Details from './components/Details';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
     <Banner />
     <Blank />
     <Nav />
     <Details />
    </div>
  );
}

export default App;
