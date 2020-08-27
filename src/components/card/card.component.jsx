import React from 'react';

import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img alt="player" src={`https://robohash.org/${props.player.id}?set=set5&size=180x180`}/>
        <h1> {props.player.name} </h1>
        <p> {props.player.email} </p>
    </div>
)