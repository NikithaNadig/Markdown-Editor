import React,{useState} from 'react';
import './App.css';
import Markdown from './components/markdown';
import Header from './components/header'
import ThemeContext, {themes} from './components/themes-context'

function App() {
  const [theme,setTheme] = useState(themes.dark);
  const changeTheme = () => {
  theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  }
  return (
    <div className="App">
    <ThemeContext.Provider value={theme}>
      <button onClick={changeTheme}>TOGGLE</button>
    <Header />
    </ThemeContext.Provider>
    <Markdown />  
    </div>
  );
}

export default App;
