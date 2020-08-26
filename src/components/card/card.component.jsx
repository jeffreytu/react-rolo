import React from 'react';

import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img alt="console" src={`https://robohash.org/${props.console.id}?set=set5&size=180x180`}/>
        <h1> {props.console.name} </h1>
        <p> {props.console.email} </p>
    </div>
)