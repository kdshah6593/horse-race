import './App.css';
import Track from './components/Track'
import Wagers from './components/Wagers'

const defHandStyle = {
  maxHeight:'34vh',
  minHeight:'34vh',
  
  maxWidth:'100vw',
  padding: 0,
};


const App = () => {
  return (
    <div className="App">
      <h1>Horse Race</h1>
      <Track />
      <Wagers />
    </div>
  );
}

export default App;
