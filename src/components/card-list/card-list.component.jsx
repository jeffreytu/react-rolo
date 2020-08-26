import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.css'

export const CardList = (props) => (
    <div className='card-list'>
    {props.consoles.map(console => (
        <Card key={console.id} console={console} />
    ))}
    </div>
)