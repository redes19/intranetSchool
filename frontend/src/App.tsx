import Header from './component/header/Header'
import Routespages from './Routes/RoutesPages'
import SearchBarre from './component/searchBarre/SearchBarre';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <SearchBarre/>
        <div className="content">
          <Routespages />
        </div>
      </div>
    </div>
  );
}

export default App;
