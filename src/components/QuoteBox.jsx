import quotes from '../quotes.json';

const QuoteBox = ({phrase, changueQuote, color}) => {


  return (
    <>
    <div className='quote-box'>
      <div className='text-flex'>
        <i className="fa-solid fa-quote-left"/>
        <h4>{quotes[phrase].quote}</h4>
      </div>
      <p>{quotes[phrase].author}</p>
      <button onClick={changueQuote} style = {{backgroundColor: color}}> &gt; </button>
    </div>
    </>
  );
};

export default QuoteBox;