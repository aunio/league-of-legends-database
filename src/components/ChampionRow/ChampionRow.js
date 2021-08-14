import React from 'react';
import './ChampionRow.css'

export default ({title, items}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div
                className="championRow--listarea">
                <p>{items[0].image.full}</p>
                <p>{items.length}</p>
                {items.length > 0 && items.map( (item, key) => (
                    <img
                        src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${item.image.full}`}
                        key={key}/>
                ))}
            </div>
        </div>
    )
}