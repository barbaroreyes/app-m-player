import {Switch,Route} from 'react-router-dom';
import Authentication from './Authentication'
import LandinPage from './components/LandinPage'
import './App.css';
import HomePage from './components/HomePage';
import Categorie from './components/Categorie';


function App() {

 
  return (
    <div className="App">
     <Switch>
     <Route exact path="/">
         <LandinPage/>
       </Route>
       <Route exact path="/home">
         <Authentication/>
       </Route>
       <Route exact path="/categorie">
          <Categorie/>
       </Route>
       
     </Switch>
    </div>
  );
}

export default App;
