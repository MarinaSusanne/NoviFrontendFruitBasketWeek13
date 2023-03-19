import React from 'react';
import './App.css';
import logo from './assets/screenshot-logo.png'


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
   
   Fruitmand bestelling - aardbeiden: ${amountStrawberry}, bananen: ${amountBanana}, appels: ${amountApples}, kiwi's: ${amountKiwis}`);
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
                <button id="minus-button" type="button"  disabled={amountStrawberry===0} onClick={()=> setAmountStrawberry(amountStrawberry -1 )}>
                -
                </button>
                <p> {amountStrawberry} </p>
                <button id="plus-button" type="button"  onClick={()=> setAmountStrawberry(amountStrawberry + 1)}>
               +
                </button>
            </article>

            <article className="fruit">
                    <p> 🍌Bananas  </p>
                <button id="minus-button" type="text"  disabled={amountBanana===0} onClick={()=> setAmountBanana(amountBanana -1 )}>
                -
                </button>
                <p> {amountBanana} </p>
                <button id="plus-button" type="text" onClick={()=> setAmountBanana(amountBanana + 1)}>
               +
                </button>
            </article>

            <article className="fruit">
                    <p> 🍏 Apples  </p>
                <button id="minus-button" type="text" disabled={amountApples===0} onClick={()=> setAmountApples(amountApples -1 )}>
               -
                </button>
                <p> {amountApples} </p>
                <button id="plus-button" type="text"  onClick={()=> setAmountApples(amountApples + 1)}>
                 +
                </button>
            </article>

            <article className="fruit">
                    <p> 🥝 Kiwis  </p>
                <button id="minus-button" type="text"  disabled={amountKiwis===0} onClick={()=> setAmountKiwis(amountKiwis -1 )}>
                -
                </button>
                <p> {amountKiwis} </p>
                <button id="plus-button" type="text"  onClick={()=> setAmountKiwis(amountKiwis + 1)}>
                +
                </button>
             </article>

            <button type="button" onClick={() => resetFruits()} >
                Reset
            </button>
            </section>

        <form onSubmit={handleSubmit}>
        <section>
        <label htmlFor="detais-name">Voornaam</label>
            <input
            type="text"
            id="details-name"
            value={nameValue}
            onChange={(e)=> setNameValue(e.target.value)}>
            </input>
        </section>
            <section>
                <label htmlFor="details-age">Leeftijd</label>
                <input
                    type="text"
                    id="details-age"
                    value={ageValue}
                    onChange={(e)=> setAgeValue(e.target.value)}>
                </input>
            </section>
            <section>
            <label htmlFor="details-email">Email</label>
                <input
                    type="text"
                    id="details-email"
                    value={emailValue}
                    onChange={(e)=> setEmailValue(e.target.value)}>
                </input>
            </section>
        <section>
            <label htmlFor="details-age">Postcode</label>
                <input
                    type="text"
                    id="details-zipcode"
                    value={zipcodeValue}
                    onChange={(e)=> setZipcodeValue(e.target.value)}>
                </input>
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

