import React, {useState} from 'react';
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

    const [formState, setFormState] = useState({
        nameValue: '',
        emailValue: '',
        ageValue: 0,
        zipcodeValue: '',
        deliveryValue: 'week',
        timeslotValue: 'daytime',
        comments: '',
        termsandconditions: false,
    })

    function handleFormChange(e){
     const changedFieldName = e.target.name;
     const inputValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

       setFormState({
           ...formState,
           [changedFieldName]: inputValue,
           });
    }


       function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
           console.log(`Fruitmand bestelling - aardbeien: ${amountStrawberry}, bananen: ${amountBanana}, appels: ${amountApples}, kiwi's: ${amountKiwis}`)
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

                <article >
                    <p>🍓Strawberries </p>
                <FruitCounter
                fruitAmount={amountStrawberry}
                setFruitAmount={setAmountStrawberry}
                />
            </article>

            <article >
                    <p> 🍌Bananas  </p>
                <FruitCounter
                fruitAmount={amountKiwis}
                setFruitAmount={setAmountKiwis}
                />
            </article>

            <article>
                    <p> 🍏 Apples  </p>
                <FruitCounter
                fruitAmount={amountApples}
                setFruitAmount={setAmountApples}
                />
            </article>

            <article>
                    <p> 🥝 Kiwis  </p>
                <FruitCounter
                fruitAmount={amountKiwis}
                setFruitAmount={setAmountKiwis}
                />
             </article>

            <Button type="button"  clickHandler={resetFruits}>
                Reset
            </Button>
            </section>


        <form onSubmit={handleSubmit}>

        <section>
        <ValueField
            label="Voornaam"
            input="name"
            inputType="text"
            value={formState.nameValue}
            changeHandler={handleFormChange}
        />
        </section>
        <section>
            <ValueField
                label="Leeftijd"
                input="age"
                inputType="text"
                value={formState.ageValue}
                changeHandler={handleFormChange}
            />
            </section>
            <section>
                <ValueField
                    label="Email"
                    input="email"
                    inputType="email"
                    value={formState.emailValue}
                    changeHandler={handleFormChange}
                />
            </section>
            <section>
                <ValueField
                    label="Postcode"
                    input="zipcode"
                    inputType="text"
                    value={formState.zipcodeValue}
                    changeHandler={handleFormChange}
                />
            </section>

        <section>
            <label htmlFor="delivery" >Bezorgfrequentie:</label>
                <select id="delivery" name="delivery" value={formState.deliveryValue} onChange={handleFormChange}>
                    <option value="week">Iedere week</option>
                    <option value="two-week">Om de week</option>
                    <option value="month">Iedere maand</option>
                </select>

            <label htmlFor="daytime"> Overdag </label>
                <input type="radio" value="daytime" name="timeslotValue" id="timeslot-field-daytime" checked={formState.timeslotValue === 'daytime'} onChange={handleFormChange} />
            <label htmlFor="evening">'s Avonds </label>
                <input type ="radio" value="evening" name="timeslotValue" id="timeslot-field-evening" checked={formState.timeslotValue === 'evening'} onChange={handleFormChange} />
        </section>

         <section>
             <label htmlFor="comments"> Opmerkingen </label>
             <textarea  id="comment-section" name="comments" value={formState.comments} onChange={handleFormChange} rows={8} cols={50}/>
         </section>

         <section>
             <label htmlFor="terms-and-conditions">  Ik ga akkoord met de voorwaarden </label>
            <input type="checkbox" id ="terms-and-conditions" name="terms-and-conditions" value={formState.termsandconditions}  onChange={handleFormChange}/>
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

