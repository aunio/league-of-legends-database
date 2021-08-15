import React from 'react';
import './CategoryChampionList.css'

export default ({ title, items }) => {

    return (
        <section id="CategoryChampionList" className="mb-5">
            <div className="container">
                <div className="row">
                    <h2>{title}</h2>
                    {items.length > 0 && items.map((item, key) => (
                        <div className="col-2 p-2">
                            <div className="champion-content">
                                <img
                                    className="champion-content__img"
                                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.id}_0.jpg`}
                                    alt={item.name}
                                    key={key} />
                                <div className="champion-content__name">
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}