
import './App.css';
import './components/CSS/navbarstyle.css';
import './components/CSS/headerstyle.css';
import './components/CSS/footerstyle.css' ; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/JS/Navbar" ; 
import Header from './components/JS/Header'
import Footer from './components/JS/Footer';

import  Provinces from './components/JS/Provinces';
import Kampot from './components/JS/provinces/Kampot';
import Sihanoukville from './components/JS/provinces/Sihanoukville';
import KohKong from './components/JS/provinces/Koh.Kong';
import Mondulkiri from './components/JS/provinces/Mondulkiri';
import SiemReap from './components/JS/provinces/Siem.Reap';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar/>
          <div className="Home">
            <Routes>
              <Route exact path="/" element ={<Header/>}> </Route>
              <Route  path="/provinces/kampot" element ={<Kampot/>}></Route>
              <Route  path="/provinces/sihanoukville" element ={<Sihanoukville/>}></Route>
              <Route  path="/provinces/kohkong" element ={<KohKong/>}></Route>
              <Route  path="/provinces/mondulkiri" element ={<Mondulkiri/>}></Route>
              <Route  path="/provinces/siemreap" element ={<SiemReap/>}> </Route>
          
            </Routes>
          </div>
          <Footer/>

        </div>
        

      </Router>

      {/* <Navbar/>
      <Header/>
      <Footer/> */}
    </>
   
  );
}

export default App;
