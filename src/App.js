import React, { useEffect, useState } from 'react'
import LeagueOfLegends from './LeagueOfLegends'
import MovieRow from './components/ChampionRow/ChampionRow'
import Header from './components/Header/Header'

import './App.css'

export default () => {

    const [championList, setChampionList] = useState([])

    useEffect(() => {
        const loadAll = async () => {
            let list = await LeagueOfLegends.getHomeList()
            setChampionList(list)
        }

        loadAll()
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

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="page">
                                <section className="list">
                                    {championList.map((item, key) => (
                                        <MovieRow
                                            key={key}
                                            title={item.title}
                                            items={item.items} />
                                    ))}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}