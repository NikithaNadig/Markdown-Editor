import React,{useState} from 'react';
import './App.css';
// import Markdown from './components/markdown';
import Theme from './components/theme'
import Header from './components/header'
import ThemeContext, {themes} from './components/themes-context'

function App() {
  const [theme,setTheme] = useState(themes.white);
  return (
    <div className="App">
      <div className="header-container">
      <Header />
      <div >
      <button className="button1 button" onClick={()=>setTheme(themes.red)}></button>
      <button className="button2 button" onClick={()=>setTheme(themes.orange)}></button>
      <button className="button3 button" onClick={()=>setTheme(themes.green)}></button>
      </div>
      </div>
    <ThemeContext.Provider value={theme}>
    <Theme />
    </ThemeContext.Provider>
    {/* <Markdown />   */}
    </div>
  );
}

export default App;
