import { useState } from 'react'
import './App.css'
import Color from './components/Color'
import QuoteBox from './components/QuoteBox'
import quotes from './quotes.json'


function App() {

  const randomQuote = Math.floor(Math.random() * quotes.length);
  const [phrase, setPhrase] = useState(randomQuote);


  const colorStyles = ['blue', 'red', 'blueviolet', 'orangered', 'black', 'green', 'yellowgreen', 'purple', 'seagreen', 'darkorchid', 'darkblue', 'brown'];

  const randomColor = Math.floor(Math.random() * colorStyles.length);
  const [color, setColor] = useState(colorStyles[randomColor]);

  const changueQuote = () => {
    const otherQuote = Math.floor(Math.random() * quotes.length);
    setPhrase(otherQuote)
    setColor(colorStyles[randomColor]);
  };


  return (
    <>
      <div className="App">
        <QuoteBox
          phrase={phrase}
          changueQuote={changueQuote}
          color={color}
        />
        <Color
          color={color}
        />
      </div>
    </>
  )
}

export default App
