import {Switch,Route} from 'react-router-dom';
import Authentication from './Authentication'
import LandinPage from './components/LandinPage'
import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
     <Route exact path="/">
         <LandinPage/>
       </Route>
       <Route exact path="/auth">
         <Authentication/>
       </Route>
       <Route exact path="/home">
           homePage
       </Route>
     </Switch>
    </div>
  );
}

export default App;
