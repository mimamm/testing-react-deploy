import './App.css';
import Landing from './components/Landing'
import Greet from './components/Greet'
import Follow from './components/Follow'
import AxiosGet from './AxiosGet'
import AxiosPost from './AxiosPost'

function App() {
  return (
    <div className="App">
      <Landing />
      <Greet name='Imam'>
        <p>Isi Greet</p>
      </Greet>
      <Follow>
        <button>
          tes button
        </button>
      </Follow>
      <br></br>
      <AxiosPost/>
      <AxiosGet/>
    </div>
  );
}

export default App;
