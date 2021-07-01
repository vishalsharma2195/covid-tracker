import './app.scss';
import Content from './components/content/Content';
import Country from './components/country/Country';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="section">
        <Content />  
        <Country />
      </div>  
    </div>
  );
}

export default App;
