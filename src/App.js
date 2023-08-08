
// import './App.css';
import Navbar from "./components/JS/Navbar" ; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './components/CSS/footerstyle.css' ; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/JS/Home';
import Destination from "./components/JS/Destination";
import Login from "./components/JS/Auth/Login";
import Register from "./components/JS/Auth/Register";
import Dashboard from "./components/JS/Admin/Dashboard";
import PostPlace from "./components/JS/Admin/PostPlace";
import EditPlace from "./components/JS/Admin/EditPlace";
import PlaceDetails from "./components/JS/organs/PlaceDetails";
import ViewPlace from "./components/JS/Admin/ViewPlace";



// css for bootstrap icon  
import "bootstrap-icons/font/bootstrap-icons.css";

import Footer from "./components/JS/Footer";

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
              <Route  path="/destination" element ={<Destination/>}> </Route>
              <Route  path="/login" element ={<Login/>}></Route>
              <Route  path="/register" element ={<Register/>}></Route>
              <Route  path="/dashboard" element ={<Dashboard/>}></Route>
              <Route  path="/dashboard/post-place" element ={<PostPlace/>}></Route>
              <Route  path="/dashboard/edit-place/:id" element ={<EditPlace/>}></Route>
              <Route  path="/dashboard/view-place/:id" element ={<ViewPlace/>}></Route>
              <Route  path="/places-details/:id" element ={<PlaceDetails/>}></Route>

            </Routes>
          </div>
          <Footer/>

        </div>
      </Router>
    </>
   
  );
}

export default App;
