import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';

const tabs=["Tab1","Tab2","Tab3"]

function App() {
  return (
    <div className="App container">
      <h1></h1>
      <Tabs content={tabs}></Tabs>
    </div>
  );
}

export default App;
