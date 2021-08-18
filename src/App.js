import React, { useEffect, useState } from 'react'
import LeagueOfLegends from './services/LeagueOfLegends'

import ChampionsList from './components/ChampionsList/ChampionsList'
import Header from './components/Header/Header'
import Loader from './components/Loader/Loader'

import './App.css'

const HomePage = () => {

    const [championsList, setChampionsList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadChampions = async () => {
            let list = await LeagueOfLegends.getChampionsList()
            setChampionsList(list)
            setTimeout(() => { setIsLoading(false) }, 2000);
        }

        loadChampions()
    }, [])

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Header />

                    <section id="page-home">

                        <section id="heroArea" className="text-center">
                            <h1 className="title">
                                <span className="title__choose-your">Escolha seu</span>
                                <span className="title__champion">Campeão</span>
                            </h1>
                        </section>

                        {championsList.map((item, key) => (
                            <ChampionsList
                                key={key}
                                items={item.items} />
                        ))}

                    </section>
                </>
            )}
        </>
    )

}

export default HomePage;