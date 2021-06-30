
import './App.css';
import Home from './components/Home/Home'
import { ContextController } from "./Context";


function App() {
  return (
    <ContextController>
    <div className="App">
     <Home/>
    </div>
    </ContextController>
  );
}

export default App;
