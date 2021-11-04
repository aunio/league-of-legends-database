import React, { useState, useEffect } from 'react'
import LeagueOfLegends from '../../services/LeagueOfLegends'

import './ChampionDetailsPage.css'

import Header from '../../components/Header/Header'
import Loader from '../../components/Loader/Loader'

const ChampionDetailsPage = ({ match }) => {

    const id = match.params.id;
    const [championDetails, setChampionDetails] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const loadChampion = async (id) => {
        const details = await LeagueOfLegends.getChampionDetails(id)
        setChampionDetails(details)
        setTimeout(() => { setIsLoading(false) }, 2000);
    }

    useEffect(() => {
        loadChampion(id)
    }, [])

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Header />

                    <section id="champions-details-page">
                        <div className="hero-img-background"
                            style={{
                                backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championDetails[0].id}_0.jpg)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100%'
                            }}>
                            <img
                                className="img-fluid"
                                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championDetails[0].id}_0.jpg`}
                                alt={championDetails[0].name} />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="champion-splash">
                                        <div className="hero-img-content text-center">
                                            <img
                                                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championDetails[0].id}_0.jpg`}
                                                alt={championDetails[0].name} />
                                        </div>
                                    </div>
                                    <div className="champion-informations">
                                        <h1 className="title text-center">
                                            <span className="champion-title">{championDetails[0].title}</span>
                                            <span className="champion-name">{championDetails[0].name}</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )
            }
        </>
    )
}

export default ChampionDetailsPage