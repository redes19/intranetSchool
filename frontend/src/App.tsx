import Home from './pages/home/Home'
import Header from './component/header/Header'
import Routespages from './Routes/RoutesPages'
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routespages />
    </div>
  );
}

export default App;
