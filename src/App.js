import './App.css';
import Header from './Components/Header';

import { GlobalProvider } from './context/GlobalState';



function App() {
  return (
    <div>
      <GlobalProvider>
      <Header/>
      </GlobalProvider>
     
    </div>
    

  );
}

export default App;
