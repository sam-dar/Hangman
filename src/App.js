import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show} from './helpers/helpers';

import './App.css';

var words = [];
const animals = ['lion', 'tiger', 'elephant', 'panda', 'zebra', 'dog', 'cat', 'rat', 'hippo', 'fox', 'wolf','bear','cheeta','giraffe'];
const birds = ['crow', 'sparrow', 'duck', 'rooster', 'hen', 'parrot', 'cocktail', 'eagle', 'dove','owl','stork','flamingo'];
const sport=['cricket','hockey','wrestling','football','basketball','racing','swimmimg','riding'];
const food=['burger','pizza','pasta','fries','zinger','biryani','rice','meat','noodles','sandwich','choclate','candy','jelly'];
const fruit =['apple','mango','melon','berry','orange','guava','coconut','strawberry','pineapple','banana','grapes','watermelon']
const vege=['okra','potato','tomato','cabbage','ginger','onion','spinach','peas','carrot','turnip','garlic','cucumber']
Array.prototype.push.apply(words, animals);
//console.log(words);
let selectedWord = words[Math.floor(Math.random() * words.length)];
// console.log(selectedWord)


function App() {

  //const [wordBank, setWordBank] = useState(['']);
  //const words = ['application', 'programming', 'interface', 'wizard'];


  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const toggleCategory = (category) => {
    //console.log('toggle function called'+category)
    if (category==='A') {
      //console.log('if true '+category)
      words = [];
      Array.prototype.push.apply(words, animals);
      //console.log(words)
      playAgain();
    }
      
    else if(category==='B') {
      //console.log('birds list')
      words = [];
      Array.prototype.push.apply(words, birds);
      playAgain();
      
    }
    if(category==='S') {
      words = [];
      Array.prototype.push.apply(words, sport);
      playAgain();
    }
    if(category==='FF') {
      words = [];
      Array.prototype.push.apply(words, fruit);
      playAgain();
    }
    if(category==='V') {
      words = [];
      Array.prototype.push.apply(words, vege);
      playAgain();
    }
    if(category==='F') {
      words = [];
      Array.prototype.push.apply(words, food);
      playAgain();
    //   console.log(words);
    //   let selectedWord = words[Math.floor(Math.random() * words.length)];
    //   console.log(selectedWord)
    }
  }

  useEffect(() => {
    //console.log(category);
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain(   ) {
    setPlayable(true);
//console.log('play again acalled')
    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);
    //setWordCategory(wordCategory);
    //console.log('words='+words)
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
    console.log('play again selected word='+selectedWord)
  }


  return (
    <>
      <Header toggleCategory={toggleCategory} />
      <div className="game-container">

        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
