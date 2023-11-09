import { WhatsappIcon, WhatsappShareButton } from 'react-share'
import React, { useState } from 'react';


const QuoteGrid = () => {
  const [quotes, setQuotes] = useState([
    { id: 1, quote: "Life isn’t about getting and having, it’s about giving and being.", author: "Kevin Kruse" },
    { id: 2, quote: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
    { id: 3, quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { id: 4, quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", author: "Robert Frost" },
    { id: 5, quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
    { id: 6, quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { id: 7, quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", author: "Michael Jordan" }, { id: 8, quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" }, { id: 9, quote: "Every strike brings me closer to the next home run.", author: "Babe Ruth" }, { id: 10, quote: "Definiteness of purpose is the starting point of all achievement.", author: "W. Clement Stone" }, { id: 11, quote: "We must balance conspicuous consumption with conscious capitalism.", author: "Kevin Kruse" }, { id: 12, quote: "Life is what happens to you while you’re busy making other plans.", author: "John Lennon" }, { id: 13, quote: "We become what we think about.", author: "Earl Nightingale" }, { id: 14, quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", author: "Mark Twain" }, { id: 15, quote: "Life is 10% what happens to me and 90% of how I react to it.", author: "Charles Swindoll" }, { id: 16, quote: "The most common way people give up their power is by thinking they don’t have any.", author: "Alice Walker" }, { id: 17, quote: "The mind is everything. What you think you become.", author: "Buddha" }, { id: 18, quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" }, { id: 19, quote: "An unexamined life is not worth living.", author: "Socrates" }, { id: 20, quote: "Eighty percent of success is showing up.", author: "Woody Allen" }, { id: 21, quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" }, { id: 22, quote: "Winning isn’t everything, but wanting to win is.", author: "Vince Lombardi" }, { id: 23, quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" }, { id: 24, quote: "Every child is an artist.  The problem is how to remain an artist once he grows up.", author: "Pablo Picasso" }, { id: 25, quote: "You can never cross the ocean until you have the courage to lose sight of the shore.", author: "Christopher Columbus" },])

  const [randomQuote, setRandomQuote] = useState('');

  const handleRandomQuoteClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  const handleShowAllQuotesClick = () => {

  };
  const shareUrl = 'https://dummyjson.com/quotes/1';



  return (
    <div>
      <button style={{
        border: '2px solid #008cba',
        background: 'transparent',
        padding: '10px 15px',
        color: '#008cba'
      }} onClick={handleRandomQuoteClick}>Show Random Quote</button>
      <button style={{
        border: '2px solid #008cba',
        background: 'transparent',
        padding: '10px 15px',
        color: '#008cba',
        marginLeft: '20px'
      }} onClick={handleShowAllQuotesClick}>Show All Quotes</button>


      {randomQuote && (
        <div style={{ border: '2px solid #808080', padding: '10px', marginTop: '20px' }}>
          <p>{randomQuote.id}</p>
          <p> Quote: {randomQuote.quote}</p>
          <p>Author: {randomQuote.author}</p>
        </div>

      )}

      <div>
        <WhatsappShareButton url={shareUrl} quote={randomQuote.quote}>
          Share to Friends on Whatsapp
          <WhatsappIcon style={{marginTop:'15px'}} size={36} round />
        </WhatsappShareButton>
      </div>


      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px', background: 'url(./Components/Assets/download.jpg)' }}>
        {quotes.map(quote => (
          <div key={quote.id} style={{ border: '2px solid #008cba', padding: '10px' }}>
            <p>{quote.id}</p>
            <p>{quote.quote}</p>
            <p>Author: {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteGrid;












