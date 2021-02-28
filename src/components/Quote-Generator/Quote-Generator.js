import React,{useState} from "react";

let quotes = [
    {quote:"What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time?", speaker:"Rick"}
    ,{quote: "Listen Morty, I hate to break it to you, but what people call love is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science.", speaker: "Rick"}, 
    {quote: "Listen to me, Morty. I know that new situations can be       intimidating. You're lookin’ around and it’s all scary and different, but y’know … meeting them head-on, charging into ‘em like a bull —  that’s how we grow as people.", speaker: "Rick"}, 
    {quote: "I'm a scientist; because I invent, transform, create, and destroy for a living, and when I don't like something about the world, I change it.", speaker: "Rick"}, 
	{quote: "Honey, stop raising your father's cholesterol so you can take a hot funeral selfie.", speaker: "Beth"}, 
	{quote: "Now if you'll excuse me, I've got a quick solo adventure to go on and this one will not be directed by Ron Howard.",speaker: "Rick"},
    {quote: "The universe is basically an animal. It grazes on the ordinary. It creates infinite idiots just to eat them." ,speaker: "Rick"}, 
    {quote: "To live is to risk it all; otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you...", speaker: "Rick"}, 
	{quote: "Don’t get drawn into the culture, Morty. Stealing stuff is about the stuff, not the stealing.", speaker: "Rick"}, 
	{quote: "Does evil exist, and if so, can one detect and measure it? Rhetorical question. The answer’s yes, you just have to be a genius.", 
	speaker: "Rick"}, 
	{quote: "Having a family doesn’t mean that you stop being an individual. You know the best thing you can do for the people that depend on you? Be honest with them, even if it means setting them free.", speaker: "Mr Meeseeks"},
    {quote: "I realize now I’m attracted to you for the same reason I can’t be with you; you can’t change. And I have no problem with that but it clearly means I have a problem with myself.", speaker: "Unity"},
	{quote: "Mr. President, if I’ve learned one thing today it’s that sometimes you have to not give a f*ck!",speaker: "Morty"},
	{quote: "Nobody exists on purpose", speaker: "Morty"},
	{quote: "Don’t make the same mistakes I made. Don’t deify the people who leave you.", speaker: "Beth"},
	{quote: "How many of these are just horrible mistakes I made? I mean, maybe I’d stop making so many if I let myself learn from them.", speaker: "Morty"},
	{quote: "Life is effort. I’ll stop when I die!", speaker: "Jerry"}]
;

function QuoteGenerator(){
    let length = quotes.length;
    let randomNum = Math.floor(Math.random() * length);
    let [quote, setQuote] = useState([]);
    const buttonHandle = (event) => {
      event.preventDefault();
      setQuote(quotes[randomNum]);
    };
    return (
      <div>
        <div className="page-top">
          <h1>Quote Generator</h1>
          <p>
            Our quote generator is easy to use and fun!, just click the button
            below to see a randomized quote from Rick and Morty. It will soon
            have you in stitches or make you stop and think.
          </p>
        </div>
        <div className="quoteSection">
          <div className="insideQuoteSection">
            <p>{quotes[randomNum].quote}</p>
            <p> - {quotes[randomNum].speaker}</p>
            <button onClick={buttonHandle}>New Quote</button>
          </div>
        </div>
      </div>
    );
}
export default QuoteGenerator;