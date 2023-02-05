import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Command from './components/Command'

function App() {
  const [command, setCommand] = useState('');
  
  const [history, setHistory] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      
      setHistory(arr => [...arr, command])
      setCommand('')
    }
  };
  return (
    <div className="App">
      {history.map((h, index)=>
        <Command text={h} key={index}/>
      )}
      {/* <Command text={updated}/> */}
      <br/>
      quest@term.kyt00n.com:$ ~ 
      <input 
      className='commandInput' 
      autoFocus value={command} 
      onChange={handleChange}
      onKeyDown={handleKeyDown}></input>
      <p>command: {command}</p>
      
      <p>history: {history.length}</p>
    </div>
  )
}

export default App
