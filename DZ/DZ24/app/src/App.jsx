import { useActionState, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './Button'
import User from './User'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
    <div>
      <User/>
    </div>
    <p>Button has been clicked {counter} times</p>
      <Button text='Click' type='blue-btn' onClick={() => setCounter(counter + 1)}/>
      <Button text='Reset counter' onClick={() => setCounter(0)}/>
      <Button text='Alert' type='alert-btn' onClick={() => alert('Test alert')}/>
    </>
  )
}

export default App

