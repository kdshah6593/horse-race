import React, { useState, useEffect } from 'react';
import Track from './Track'
import Wagers from './Wagers'

const GamePage = () => {
    const [deck, setDeck] = useState({});
    const [deckOfCards, setDeckOfCards] = useState([]);

    useEffect(() => {
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }, [])
    
    
    return (
        <div>
            <h1>Horse Race</h1>
            <Track />
            <Wagers />
            {deck.deck_id}
        </div>
    )
}

export default GamePage;