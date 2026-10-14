import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Result from './components/Result.jsx'
function App() {

  const [userInput, setUserInput]=useState({
    initialInvestment: 10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
});

const inputIsValid=userInput.duration>=1;

function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput=>{
        return{
            ...prevUserInput,
            [inputIdentifier]:+newValue,
        };
    });
}

  return (
    <>
      <Header></Header>
      <UserInput onChange={handleChange} userInput={userInput}></UserInput>
      {!inputIsValid && <p className='center'>Please enter a duration greater than zero</p>}
      {inputIsValid && <Result input={userInput}></Result>}
    </>
  )
}

export default App
