import { useState } from 'react'
import EmojiList from './emojiList'
import './App.css'
import EmojiCard from './emojiCard';

function App() {
  const [emojies, setEmojies] = useState([
    {id: 1, emoji: '😀', votes: 0},
    {id: 2, emoji: '😂', votes: 0},
    {id: 3, emoji: '😍', votes: 0},
  ]);

  const [winner, setWinner] = useState(null);

  const handleVote = (id) => {
    const updated = emojies.map((emoji) => {
      if (emoji.id === id) {
        return {
          ...emoji,
          votes: emoji.votes + 1
        };
      } else {
        return emoji;
      }
    });
    setEmojies(updated);
  };

  const refreshVotes = () => {
    const updated = emojies.map((emoji) => {
      return {
        ...emoji,
        votes : 0
      }
    });
    setEmojies(updated);
    setWinner(null);
  };

  const identifiWinner = () => {
    const allZero = emojies.every(emoji => emoji.votes === 0);
      if (allZero) {
        setWinner(null);
      return;
  }


    let winnerIndex = 0;
    for(let i = 0; i < emojies.length; i++){
      if(emojies[i].votes > emojies[winnerIndex].votes){
        winnerIndex = i;
      };
    };
    setWinner(emojies[winnerIndex]);
  }


  return (
    <>
      <EmojiList emojies={emojies} onVote={handleVote} onRefresh={refreshVotes} onWinner={identifiWinner}/>
      {winner && <EmojiCard emoji={winner}/>}
    </>
  )
}

export default App
