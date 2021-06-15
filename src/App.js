import {Switch,Route} from 'react-router-dom';
import Authentication from './Authentication'
import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/auth">
         <Authentication/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
