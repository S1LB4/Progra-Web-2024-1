import { useState } from 'react';
import './App.css';
import { TasksContextProvider } from './context/TasksContextProvider'
import { Body } from './Components/Body/Body';

function App(){
  const [count, setCount] = useState(0)
  return(
    <>
      <Body />
    </>
  )
}

export default App