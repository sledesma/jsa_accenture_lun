import './App.css';
import Log from './components/log/log.component';

import TextBox from './components/text-box/text-box.component';

function App() {
  return (
    <div className="App">
      <Log>
        <TextBox />
        <div>
          Hola mundo
        </div>
      </Log>
    </div>
  );
}

export default App;
