import React, { useEffect, useState } from 'react'
import LeagueOfLegends from './services/LeagueOfLegends'
import ChampionsList from './components/ChampionsList/ChampionsList'
import Header from './components/Header/Header'

import './App.css'

const HomePage = () => {

    const [championsList, setChampionsList] = useState([])

    useEffect(() => {
        const loadChampions = async () => {
            let list = await LeagueOfLegends.getChampionsList()
            setChampionsList(list)
        }

        loadChampions()
    }, [])

    return (
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
    )

}

export default HomePage;