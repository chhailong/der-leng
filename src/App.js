
// import './App.css';
import Navbar from "./components/JS/Navbar" ; 
import Footer from './components/JS/Footer';


import './components/CSS/footerstyle.css' ; 
import './components/CSS/allprovinces.css' ; 
import './components/CSS/province.css';
import './components/CSS/allDestination.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './components/JS/Home'
import Allprovinces from "./components/JS/allProvinces";
import Kampot from './components/JS/provinces/Kampot';
import Sihanoukville from './components/JS/provinces/Sihanoukville';
import KohKong from './components/JS/provinces/Koh.Kong';
import Mondulkiri from './components/JS/provinces/Mondulkiri';
import SiemReap from './components/JS/provinces/Siem.Reap';

import Bokor from "./components/JS/Destinations/Bokor";

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar/>
          <div className="Home">
            <Routes>
              <Route exact path="/" element ={<Home/>}> </Route>

              /allprovinces
              <Route  path="/allprovinces" element ={<Allprovinces/>}></Route>
              <Route  path="/provinces/kampot" element ={<Kampot/>}></Route>
              <Route  path="/provinces/sihanoukville" element ={<Sihanoukville/>}></Route>
              <Route  path="/provinces/kohkong" element ={<KohKong/>}></Route>
              <Route  path="/provinces/mondulkiri" element ={<Mondulkiri/>}></Route>
              <Route  path="/provinces/siemreap" element ={<SiemReap/>}> </Route>



              <Route  path="/provinces/kampot/bokor" element ={<Bokor/>}> </Route>


          
            </Routes>
          </div>


          {/* <Footer/> */}

        </div>
        

      </Router>
    </>
   
  );
}

export default App;
