import './App.css';

import SearchBar from './components/searchBar.jsx';
import SideBar from './components/sideBar.jsx';
import NavBar from './components/navBar.jsx';
import InputField from './components/inputField.jsx';

 


function App() {
  return (
    <div className="App">
      <div className="wrapper-1">
      <SearchBar />
      <NavBar />
      </div>
<div className="wrapper-2">
      <SideBar />
     <InputField />
</div>
      
    
    </div>
  );
}

export default App;
