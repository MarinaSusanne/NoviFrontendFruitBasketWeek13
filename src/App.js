import React from 'react';
import './App.css';
import logo from './assets/screenshot-logo.png';
import FruitCounter from "./components/FruitCounter";
import Button from "./components/Button";
import ValueField from "./components/ValueField";

function App() {
    const [amountStrawberry, setAmountStrawberry] = React.useState(0);
    const [amountBanana, setAmountBanana] = React.useState(0);
    const [amountApples, setAmountApples] = React.useState(0);
    const [amountKiwis, setAmountKiwis] = React.useState(0);

    const [nameValue, setNameValue] = React.useState("");
    const [emailValue, setEmailValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState(0);
    const [zipcodeValue, setZipcodeValue] = React.useState('');
    const [deliveryValue, setDeliveryValue] = React.useState('week');
    const [timeslotValue, setTimeslotValue] = React.useState('daytime');
    const [comments, setComments] = React.useState('');
    const [termsandconditions, setTermsandconditions] = React.useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
    Naam: ${nameValue}, 
    Leeftijd: ${ageValue}, 
    Postcode: ${zipcodeValue}, 
    Bezorgfrequentie: ${deliveryValue} en graag  ${timeslotValue},
    Opmerkingen: ${comments},
    Algemene voorwaarden: ${termsandconditions}
    Fruitmand bestelling - aardbeien: ${amountStrawberry}, bananen: ${amountBanana}, appels: ${amountApples}, kiwi's: ${amountKiwis}`);
    };


    /* function reset, function handle submit,handle form change */
    function resetFruits(){
        setAmountBanana(0);
        setAmountStrawberry(0);
        setAmountKiwis(0);
        setAmountApples(0);
    }

    return(
        <>
            <img src={logo} alt="logo"/>
            <h1>Fruitmand bezorgservice</h1>
            <section className="fruit-counter">

                <article className="fruit">
                    <p>🍓Strawberries </p>
                <FruitCounter
                fruitAmount={amountStrawberry}
                setFruitAmount={setAmountStrawberry}
                />
            </article>

            <article className="fruit">
                    <p> 🍌Bananas  </p>
                <FruitCounter
                fruitAmount={amountKiwis}
                setFruitAmount={setAmountKiwis}
                />
            </article>

            <article className="fruit">
                    <p> 🍏 Apples  </p>
                <FruitCounter
                fruitAmount={amountApples}
                setFruitAmount={setAmountApples}
                />
            </article>

            <article className="fruit">
                    <p> 🥝 Kiwis  </p>
                <FruitCounter
                fruitAmount={amountKiwis}
                setFruitAmount={setAmountKiwis}
                />
             </article>

            <Button type="button" clickHandler={resetFruits}>
                Reset
            </Button>
            </section>


        <form onSubmit={handleSubmit}>

        <section>
        <ValueField
            label="Voornaam"
            input="name"
            inputType="text"
            value={nameValue}
            changeHandler={setNameValue}
        />
        </section>
        <section>
            <ValueField
                label="Leeftijd"
                input="age"
                inputType="text"
                value={ageValue}
                changeHandler={setAgeValue}
            />
            </section>
            <section>
                <ValueField
                    label="Email"
                    input="email"
                    inputType="email"
                    value={emailValue}
                    changeHandler={setEmailValue}
                />
            </section>
            <section>
                <ValueField
                    label="Postcode"
                    input="zipcode"
                    inputType="text"
                    value={zipcodeValue}
                    changeHandler={setZipcodeValue}
                />
            </section>

        <section>
            <label htmlFor="delivery" >Bezorgfrequentie:</label>
                <select id="delivery" name="delivery" onChange={(e)=> setDeliveryValue(e.target.value)}>
                    <option value="week">Iedere week</option>
                    <option value="two-week">Om de week</option>
                    <option value="month">Iedere maand</option>
                </select>

            <label htmlFor="daytime"> Overdag </label>
                <input type="radio" value="daytime" name="timeslot" id="timeslot-field-daytime" checked={timeslotValue === 'daytime'} onChange={(e)=> setTimeslotValue(e.target.value)} />
            <label htmlFor="evening">'s Avonds </label>
                <input type ="radio" value="evening" name="timeslot" id="timeslot-field-evening" checked={timeslotValue === 'evening'} onChange={(e)=> setTimeslotValue(e.target.value)} />
        </section>

         <section>
             <label htmlFor="comments"> Opmerkingen </label>
             <textarea  id="comment-section" name="comments" value={comments} onChange={(e) => setComments(e.target.value)} rows={8} cols={50}/>
         </section>

         <section>
             <label htmlFor="terms-and-conditions">  Ik ga akkoord met de voorwaarden </label>
            <input type="checkbox" id ="terms-and-conditions" name="agree" value={termsandconditions}  onChange={(e)=> setTermsandconditions(e.target.checked)}/>
        </section>

            <section>
            <button type="submit">
                Versturen
            </button>
            </section>
        </form>
        </>
        );
    }

export default App;

