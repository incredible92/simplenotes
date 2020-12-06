import './App.css';

import SearchBar from './components/searchBar.jsx';
import SideBar from './components/sideBar.jsx';
import NavBar from './components/navBar.jsx';

 


function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <SearchBar />
      <NavBar />
      </div>
      <SideBar />
     
    
    </div>
  );
}

export default App;
