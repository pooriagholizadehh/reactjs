import Tourism from './Components/Pages/tourism';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/footer/Footer';
import Home from './Components/Pages/Home';
import Tour from './Components/Pages/Tour';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tourism" component={Tourism} />
          <Route exact path="/tour" component={Tour}/>
        </switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
