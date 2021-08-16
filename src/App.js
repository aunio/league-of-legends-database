import React, { useEffect, useState } from 'react'
import LeagueOfLegends from './LeagueOfLegends'
import AllChampionsList from './components/AllChampionsList/AllChampionsList'
import Header from './components/Header/Header'

import './App.css'

const HomePage = () => {

    const [allChampionsList, setAllChampionsList] = useState([])

    useEffect(() => {
        const loadAllChampions = async () => {
            let list = await LeagueOfLegends.getAllChampionsList()
            setAllChampionsList(list)
        }

        loadAllChampions()
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

                {allChampionsList.map((item, key) => (
                    <AllChampionsList
                        key={key}
                        items={item.items} />
                ))}
            </section>
        </>
    )

}

export default HomePage;