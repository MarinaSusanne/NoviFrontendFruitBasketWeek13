import React from 'react';
import './App.css';
import logo from './assets/screenshot-logo.png'
import Fruits from "./components/Fruits";
import


function App() {
    const [amountStrawberry, setAmountStrawberry] = React.useState(0);
    const [amountBanana, setAmountBanana] = React.useState(0);
    const [amountApples, setAmountApples] = React.useState(0);
    const [amountKiwis, setAmountKiwis] = React.useState(0);

    function handleSubmit (e){
        e.preventDefault();
        console.log("je hebt geklikt!");
    }

  return (
    <>
      <img src={logo} alt="logo"/>
      <h1>Fruitmand bezorgservice</h1>

        <Fruits
        labelTag=""

        />
    </>
  );
}

export default App;
