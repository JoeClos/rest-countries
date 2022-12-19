import './App.css';
import FrontPage from './components/FrontPage';
import SearchAppBar from './components/SearchAppBar';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <FrontPage />
    </div>
  );
}

export default App;
