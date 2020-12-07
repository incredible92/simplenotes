import React, {useState} from 'react'
import './App.css';


import SearchBar from './components/searchBar.jsx';
import SideBar from './components/sideBar.jsx';
import NavBar from './components/navBar.jsx';
import InputField from './components/inputField.jsx';

  


function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleContent = (event,action) => {
    action==='title'?
    setTitle(event.target.value) :
    setContent(event.target.value)
  }

  return (
    <div className="App">
      <div className="wrapper-1">
      <SearchBar />
      <NavBar />
      </div>
<div className="wrapper-2">
      <SideBar content={content} title={title} />
     <InputField handleContent={handleContent}/>
</div>
      
    
    </div>
  );
}

export default App;
