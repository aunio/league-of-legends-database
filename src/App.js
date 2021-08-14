import React, { useEffect, useState } from 'react'
import LeagueOfLegends from './LeagueOfLegends'
import MovieRow from './components/ChampionRow/ChampionRow'
import Header from './components/Header/Header'

import './App.css'

export default () => {

    const [ championList, setChampionList ] = useState([])

    useEffect( () => {
        const loadAll = async () => {
            let list = await LeagueOfLegends.getHomeList()
            setChampionList(list)
        }

        loadAll()
    }, [])

    return(
        <>
            <Header />
            <div className="page">
                <section className="list">
                    {championList.map( (item, key) => (
                        <MovieRow
                            key={key}
                            title={item.title}
                            items={item.items} />
                    ))}
                </section>
            </div>
        </>
    )
}