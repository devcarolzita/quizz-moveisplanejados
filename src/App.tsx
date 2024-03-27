import './App.css'
import Questions from './components/Questions'
import Answers from './components/Answers/answers';
import { Route, Routes } from 'react-router-dom';

function App() {  
  return (
    <>
    <Routes>
      <Route path="/"  element={ <Questions />} />
      <Route path="/end"  element={ <Answers />} />
    </Routes>
         </>
  )
}

export default App
