import React from 'react';
import './AllChampionsList.css'

const AllChampionsList = ({ items }) => {
    return (
        <section id="AllChampionsList" className="mb-5">
            <div className="container">
                <div className="row">
                    <h2 className="champion-class-title">Champions</h2>
                    {items.length > 0 && items.map((item, key) => (
                        <div
                            key={key}
                            className="col-6 col-md-4 col-lg-3 col-xl-2 p-2">
                            <div className="champion-content">
                                <img
                                    key={key}
                                    className="champion-content__img"
                                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.id}_0.jpg`}
                                    alt={item.name} />
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

export default AllChampionsList;